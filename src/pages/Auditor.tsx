
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Download, Upload, Clock, CheckCircle, AlertTriangle, User, MapPin, Calendar } from "lucide-react";

const Auditor = () => {
  const [selectedSite, setSelectedSite] = useState(null);

  const mockQueue = [
    {
      id: 1,
      siteName: "Woodland Restoration Site",
      landowner: "Green Valley Estates",
      location: "Yorkshire Dales",
      area: "12.5 hectares",
      habitatType: "Woodland",
      submittedDate: "2024-01-15",
      priority: "High",
      status: "Pending Review",
      assignedTo: "Dr. Sarah Mitchell",
      documents: [
        "Site_Survey.pdf",
        "Shapefile.zip",
        "Photos.zip"
      ],
      estimatedValue: "£8,500"
    },
    {
      id: 2,
      siteName: "Wetland Creation Project",
      landowner: "Marsh Conservation Ltd", 
      location: "Somerset Levels",
      area: "8.2 hectares",
      habitatType: "Wetland",
      submittedDate: "2024-01-10",
      priority: "Medium",
      status: "In Progress",
      assignedTo: "Dr. James Wilson",
      documents: [
        "Ecological_Assessment.pdf",
        "Site_Boundaries.shp",
        "Historical_Data.pdf"
      ],
      estimatedValue: "£6,200"
    },
    {
      id: 3,
      siteName: "Grassland Enhancement",
      landowner: "Cotswold Meadows",
      location: "Cotswolds",
      area: "25.0 hectares",
      habitatType: "Grassland",
      submittedDate: "2024-01-05",
      priority: "Low",
      status: "Approved",
      assignedTo: "Dr. Emily Carter",
      documents: [
        "Final_Report.pdf",
        "Compliance_Certificate.pdf"
      ],
      estimatedValue: "£15,000"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending Review":
        return "bg-yellow-100 text-yellow-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Auditor Portal</h1>
          <p className="text-xl text-gray-600">
            Review and assess BNG credit applications
          </p>
        </div>

        <Tabs defaultValue="queue" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="queue">Site Queue</TabsTrigger>
            <TabsTrigger value="review">Review Site</TabsTrigger>
            <TabsTrigger value="status">Status Dashboard</TabsTrigger>
            <TabsTrigger value="upload">Upload Reports</TabsTrigger>
          </TabsList>

          {/* Site Queue Tab */}
          <TabsContent value="queue" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">
                    Awaiting assessment
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">
                    Currently reviewing
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">
                    This month
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              {mockQueue.map((site) => (
                <Card key={site.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <CardTitle className="text-lg">{site.siteName}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{site.landowner}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{site.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(site.submittedDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Badge className={getPriorityColor(site.priority)}>
                          {site.priority}
                        </Badge>
                        <Badge className={getStatusColor(site.status)}>
                          {site.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Area</p>
                        <p className="text-sm text-gray-600">{site.area}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Habitat Type</p>
                        <p className="text-sm text-gray-600">{site.habitatType}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Assigned To</p>
                        <p className="text-sm text-gray-600">{site.assignedTo}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Est. Value</p>
                        <p className="text-sm text-gray-600">{site.estimatedValue}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {site.documents.map((doc, index) => (
                          <Button key={index} variant="outline" size="sm" className="text-xs">
                            <Download className="w-3 h-3 mr-1" />
                            {doc}
                          </Button>
                        ))}
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Review Site
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Site Review: {site.siteName}</DialogTitle>
                            <DialogDescription>
                              Complete ecological assessment and update status
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2">Site Information</h4>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between">
                                    <span>Landowner:</span>
                                    <span>{site.landowner}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Location:</span>
                                    <span>{site.location}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Area:</span>
                                    <span>{site.area}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Habitat:</span>
                                    <span>{site.habitatType}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-2">Documents</h4>
                                <div className="space-y-2">
                                  {site.documents.map((doc, index) => (
                                    <Button key={index} variant="outline" size="sm" className="w-full justify-start">
                                      <Download className="w-4 h-4 mr-2" />
                                      {doc}
                                    </Button>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2">Assessment</h4>
                                <div className="space-y-3">
                                  <div>
                                    <label className="block text-sm font-medium mb-1">
                                      Update Status
                                    </label>
                                    <Select defaultValue={site.status}>
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Pending Review">Pending Review</SelectItem>
                                        <SelectItem value="In Progress">In Progress</SelectItem>
                                        <SelectItem value="Approved">Approved</SelectItem>
                                        <SelectItem value="Rejected">Rejected</SelectItem>
                                        <SelectItem value="Requires More Info">Requires More Info</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  
                                  <div>
                                    <label className="block text-sm font-medium mb-1">
                                      Assessment Notes
                                    </label>
                                    <Textarea 
                                      placeholder="Enter your assessment notes and findings..."
                                      className="h-32"
                                    />
                                  </div>
                                  
                                  <div>
                                    <label className="block text-sm font-medium mb-1">
                                      Biodiversity Value Score
                                    </label>
                                    <Select>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select score" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="excellent">Excellent (4.0-5.0)</SelectItem>
                                        <SelectItem value="good">Good (3.0-3.9)</SelectItem>
                                        <SelectItem value="moderate">Moderate (2.0-2.9)</SelectItem>
                                        <SelectItem value="poor">Poor (1.0-1.9)</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex space-x-2">
                                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                                  Save Assessment
                                </Button>
                                <Button variant="outline" className="flex-1">
                                  Request More Info
                                </Button>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Review Site Tab */}
          <TabsContent value="review" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Site Review</CardTitle>
                <CardDescription>
                  Comprehensive assessment workspace for selected site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <FileText className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Site Selected</h3>
                  <p className="text-gray-600">
                    Select a site from the queue to begin detailed review
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Status Dashboard Tab */}
          <TabsContent value="status" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Workflow Progress</CardTitle>
                  <CardDescription>Current assessment pipeline</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Pending Review</span>
                      <span>33%</span>
                    </div>
                    <Progress value={33} className="w-full" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>In Progress</span>
                      <span>33%</span>
                    </div>
                    <Progress value={33} className="w-full" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completed</span>
                      <span>34%</span>
                    </div>
                    <Progress value={34} className="w-full" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Your assessment statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Sites Reviewed</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Average Review Time</span>
                    <span className="font-medium">5.2 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Approval Rate</span>
                    <span className="font-medium">66%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Value Assessed</span>
                    <span className="font-medium">£29,700</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Upload Reports Tab */}
          <TabsContent value="upload" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Assessment Reports</CardTitle>
                <CardDescription>
                  Upload completed reports and certificates for landowners
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select Site
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a site to upload reports for" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockQueue.map((site) => (
                        <SelectItem key={site.id} value={site.id.toString()}>
                          {site.siteName} - {site.landowner}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-sm font-medium">Final Assessment Report</p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF format, up to 10MB
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-sm font-medium">BNG Certificate</p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF format, official certificate
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Report Summary
                  </label>
                  <Textarea
                    placeholder="Provide a summary of your assessment findings and recommendations..."
                    className="h-32"
                  />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Upload Reports
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auditor;
