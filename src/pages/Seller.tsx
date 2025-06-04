
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, MapPin, DollarSign, CheckCircle, Clock, AlertCircle } from "lucide-react";

const Seller = () => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const mockListings = [
    {
      id: 1,
      title: "Woodland Restoration Site",
      area: "12.5 hectares",
      status: "Under Review",
      progress: 75,
      estimatedValue: "£8,500",
      submittedDate: "2024-01-15",
      auditStage: "Ecological Assessment"
    },
    {
      id: 2,
      title: "Wetland Creation Project", 
      area: "8.2 hectares",
      status: "Approved",
      progress: 100,
      estimatedValue: "£6,200",
      submittedDate: "2023-12-10",
      auditStage: "Complete"
    }
  ];

  const handleFileUpload = () => {
    // Simulate file upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Seller Dashboard</h1>
          <p className="text-xl text-gray-600">
            Manage your BNG credit listings and track audit progress
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="upload">Upload Site</TabsTrigger>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Listings</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">
                    +1 from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Area</CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">20.7 ha</div>
                  <p className="text-xs text-muted-foreground">
                    Across all sites
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Estimated Value</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">£14,700</div>
                  <p className="text-xs text-muted-foreground">
                    Pending approval
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates on your listings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockListings.map((listing) => (
                  <div key={listing.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{listing.title}</p>
                      <p className="text-sm text-gray-600">Current stage: {listing.auditStage}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={listing.status === "Approved" ? "default" : "secondary"}>
                        {listing.status}
                      </Badge>
                      <div className="text-right">
                        <p className="font-medium">{listing.estimatedValue}</p>
                        <p className="text-xs text-gray-500">{listing.area}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Upload Tab */}
          <TabsContent value="upload" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Site</CardTitle>
                <CardDescription>
                  Submit your site for BNG credit assessment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="site-name">Site Name</Label>
                      <Input id="site-name" placeholder="Enter site name" />
                    </div>

                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="Site address or coordinates" />
                    </div>

                    <div>
                      <Label htmlFor="area">Total Area (hectares)</Label>
                      <Input id="area" type="number" placeholder="0.0" />
                    </div>

                    <div>
                      <Label htmlFor="habitat-type">Primary Habitat Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select habitat type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="woodland">Woodland</SelectItem>
                          <SelectItem value="wetland">Wetland</SelectItem>
                          <SelectItem value="grassland">Grassland</SelectItem>
                          <SelectItem value="heathland">Heathland</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="description">Site Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the habitat creation or enhancement planned..."
                        className="h-32"
                      />
                    </div>

                    <div>
                      <Label>Upload Shapefile</Label>
                      <div 
                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer"
                        onClick={handleFileUpload}
                      >
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <p className="text-sm text-gray-600">
                          Click to upload shapefile (.shp, .shx, .dbf)
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Maximum file size: 50MB
                        </p>
                      </div>
                      {uploadProgress > 0 && (
                        <div className="mt-2">
                          <Progress value={uploadProgress} className="w-full" />
                          <p className="text-xs text-gray-500 mt-1">
                            Uploading... {uploadProgress}%
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Additional Documents</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <FileText className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm font-medium">Ecological Survey</p>
                      <p className="text-xs text-gray-500">PDF, up to 10MB</p>
                    </div>
                    <div className="border rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <FileText className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm font-medium">Site Photos</p>
                      <p className="text-xs text-gray-500">JPG, PNG, up to 5MB each</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Submit for Assessment
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Listings Tab */}
          <TabsContent value="listings" className="space-y-6">
            <div className="space-y-4">
              {mockListings.map((listing) => (
                <Card key={listing.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{listing.title}</CardTitle>
                        <CardDescription>
                          Submitted on {new Date(listing.submittedDate).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <Badge variant={listing.status === "Approved" ? "default" : "secondary"}>
                        {listing.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Site Details</p>
                        <p className="text-sm text-gray-600">Area: {listing.area}</p>
                        <p className="text-sm text-gray-600">Est. Value: {listing.estimatedValue}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Audit Progress</p>
                        <Progress value={listing.progress} className="w-full" />
                        <p className="text-sm text-gray-600">{listing.auditStage}</p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium">Status</p>
                        <div className="flex items-center space-x-2">
                          {listing.status === "Approved" ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : listing.status === "Under Review" ? (
                            <Clock className="w-4 h-4 text-yellow-600" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-red-600" />
                          )}
                          <span className="text-sm">{listing.status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Download Report
                      </Button>
                      {listing.status === "Approved" && (
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          List for Sale
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Earnings Summary</CardTitle>
                  <CardDescription>Your BNG credit sales performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Sold</span>
                    <span className="font-medium">0 units</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Revenue</span>
                    <span className="font-medium">£0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pending Sales</span>
                    <span className="font-medium">2 listings</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Estimated Value</span>
                    <span className="font-medium">£14,700</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                  <CardDescription>Manage your payment details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="bank-name">Bank Name</Label>
                    <Input id="bank-name" placeholder="Enter bank name" />
                  </div>
                  <div>
                    <Label htmlFor="account-number">Account Number</Label>
                    <Input id="account-number" placeholder="Enter account number" />
                  </div>
                  <div>
                    <Label htmlFor="sort-code">Sort Code</Label>
                    <Input id="sort-code" placeholder="00-00-00" />
                  </div>
                  <Button className="w-full">Update Payment Details</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Seller;
