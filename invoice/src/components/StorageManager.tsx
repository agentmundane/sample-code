import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { 
  Database, 
  Download, 
  Upload, 
  Trash2, 
  AlertCircle, 
  CheckCircle,
  RefreshCw,
  HardDrive
} from 'lucide-react';
import { useQuoteStorage } from '@/hooks/useQuoteStorage';
import { StorageUtils } from '@/utils/storage';
import { seedSampleData, resetToSampleData } from '@/data/sampleData';
import { useToast } from '@/hooks/use-toast';

interface StorageManagerProps {
  onClose: () => void;
}

export const StorageManager: React.FC<StorageManagerProps> = ({ onClose }) => {
  const { 
    quotes, 
    clearAllQuotes, 
    exportQuotes, 
    importQuotes, 
    getStorageInfo, 
    reloadQuotes,
    error,
    lastSaved 
  } = useQuoteStorage();
  
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [importResult, setImportResult] = useState<{
    success: boolean;
    imported: number;
    errors: string[];
  } | null>(null);

  const storageInfo = getStorageInfo();

  const handleExport = () => {
    try {
      const exportData = exportQuotes();
      const blob = new Blob([exportData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `quotes-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Export Successful",
        description: "Your quotes have been exported successfully.",
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Failed to export quotes. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const jsonData = e.target?.result as string;
        const result = importQuotes(jsonData);
        setImportResult(result);
        
        if (result.success) {
          toast({
            title: "Import Successful",
            description: `Successfully imported ${result.imported} quotes.`,
          });
        } else {
          toast({
            title: "Import Failed",
            description: "Some quotes could not be imported. Check the details below.",
            variant: "destructive"
          });
        }
      } catch (error) {
        toast({
          title: "Import Failed",
          description: "Invalid file format. Please check your backup file.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    reader.readAsText(file);
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all quotes? This action cannot be undone.')) {
      try {
        clearAllQuotes();
        toast({
          title: "Data Cleared",
          description: "All quotes have been deleted.",
        });
      } catch (error) {
        toast({
          title: "Clear Failed",
          description: "Failed to clear data. Please try again.",
          variant: "destructive"
        });
      }
    }
  };

  const handleLoadSampleData = () => {
    try {
      const seeded = seedSampleData();
      if (seeded) {
        reloadQuotes();
        toast({
          title: "Sample Data Loaded",
          description: "Demo quotes have been loaded successfully.",
        });
      } else {
        toast({
          title: "Sample Data Already Present",
          description: "You already have quotes. Clear data first to load sample data.",
        });
      }
    } catch (error) {
      toast({
        title: "Load Failed",
        description: "Failed to load sample data. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleResetToSampleData = () => {
    if (window.confirm('This will replace all existing quotes with sample data. Are you sure?')) {
      try {
        resetToSampleData();
        reloadQuotes();
        toast({
          title: "Data Reset",
          description: "All data has been reset to sample quotes.",
        });
      } catch (error) {
        toast({
          title: "Reset Failed",
          description: "Failed to reset data. Please try again.",
          variant: "destructive"
        });
      }
    }
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getStorageStatusColor = (percentage: number) => {
    if (percentage < 50) return 'bg-brand-green';
    if (percentage < 80) return 'bg-brand-yellow';
    return 'bg-brand-coral';
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Database className="h-6 w-6" />
              Storage Manager
            </h1>
            <p className="text-muted-foreground">Manage your quote data and storage</p>
          </div>
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        </div>

        {/* Storage Usage */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HardDrive className="h-5 w-5" />
              Storage Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Used Space</span>
                <span className="text-sm text-muted-foreground">
                  {formatBytes(storageInfo.used)} / {formatBytes(5 * 1024 * 1024)}
                </span>
              </div>
              <Progress 
                value={storageInfo.percentage} 
                className={`h-2 ${getStorageStatusColor(storageInfo.percentage)}`}
              />
              <div className="flex items-center justify-between text-sm">
                <span>
                  {quotes.length} quotes stored
                </span>
                <Badge variant={storageInfo.percentage > 80 ? "destructive" : "secondary"}>
                  {storageInfo.percentage}% full
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">localStorage Available</span>
                <Badge variant="outline" className="bg-brand-green/10 text-brand-green">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Available
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Saved</span>
                <span className="text-sm text-muted-foreground">
                  {lastSaved ? lastSaved.toLocaleString() : 'Never'}
                </span>
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Data Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Export/Import */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleExport} className="gap-2 flex-1">
                  <Download className="h-4 w-4" />
                  Export All Quotes
                </Button>
                <Button 
                  onClick={() => fileInputRef.current?.click()} 
                  variant="outline" 
                  className="gap-2 flex-1"
                  disabled={isLoading}
                >
                  <Upload className="h-4 w-4" />
                  {isLoading ? 'Importing...' : 'Import Quotes'}
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  style={{ display: 'none' }}
                />
              </div>

              {/* Import Results */}
              {importResult && (
                <Alert variant={importResult.success ? "default" : "destructive"}>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <div className="space-y-1">
                      <p>Import completed: {importResult.imported} quotes imported</p>
                      {importResult.errors.length > 0 && (
                        <div className="text-sm">
                          <p className="font-medium">Errors:</p>
                          <ul className="list-disc list-inside">
                            {importResult.errors.map((error, index) => (
                              <li key={index}>{error}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </AlertDescription>
                </Alert>
              )}

              <Separator />

              {/* Demo Data */}
              <div className="space-y-3">
                <h3 className="font-medium">Demo Data</h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    onClick={handleLoadSampleData} 
                    variant="outline" 
                    className="gap-2 flex-1"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Load Sample Data
                  </Button>
                  <Button 
                    onClick={handleResetToSampleData} 
                    variant="outline" 
                    className="gap-2 flex-1"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Reset to Sample Data
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Danger Zone */}
              <div className="space-y-3">
                <h3 className="font-medium text-destructive">Danger Zone</h3>
                <Button 
                  onClick={handleClearAll} 
                  variant="destructive" 
                  className="gap-2 w-full"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear All Data
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};