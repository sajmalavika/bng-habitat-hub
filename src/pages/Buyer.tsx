
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Filter, MapPin, Calendar, Star } from "lucide-react";

const Buyer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [habitatFilter, setHabitatFilter] = useState("all");
  const [sortBy, setSortBy] = useState("price-low");

  const mockListings = [
    {
      id: 1,
      title: "Woodland Restoration Site",
      location: "Yorkshire Dales",
      habitat: "Woodland",
      area: "12.5 hectares",
      price: "£8,500",
      pricePerUnit: "£680 per unit",
      units: 12.5,
      seller: "Green Valley Estates",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80",
      description: "Ancient woodland restoration project with native oak and beech plantings.",
      deliveryDate: "Q2 2025",
      verified: true
    },
    {
      id: 2,
      title: "Wetland Creation Project",
      location: "Somerset Levels",
      habitat: "Wetland",
      area: "8.2 hectares",
      price: "£6,200",
      pricePerUnit: "£756 per unit",
      units: 8.2,
      seller: "Marsh Conservation Ltd",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
      description: "Reed bed and pond creation with wildlife corridors.",
      deliveryDate: "Q3 2025",
      verified: true
    },
    {
      id: 3,
      title: "Grassland Enhancement",
      location: "Cotswolds",
      habitat: "Grassland",
      area: "25.0 hectares",
      price: "£15,000",
      pricePerUnit: "£600 per unit",
      units: 25.0,
      seller: "Cotswold Meadows",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
      description: "Species-rich grassland restoration with traditional wildflower meadows.",
      deliveryDate: "Q1 2025",
      verified: true
    }
  ];

  const filteredListings = mockListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesHabitat = habitatFilter === "all" || listing.habitat.toLowerCase() === habitatFilter;
    return matchesSearch && matchesHabitat;
  });

  const sortedListings = [...filteredListings].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return parseFloat(a.price.replace("£", "").replace(",", "")) - parseFloat(b.price.replace("£", "").replace(",", ""));
      case "price-high":
        return parseFloat(b.price.replace("£", "").replace(",", "")) - parseFloat(a.price.replace("£", "").replace(",", ""));
      case "area-large":
        return b.units - a.units;
      case "area-small":
        return a.units - b.units;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">BNG Credits Marketplace</h1>
          <p className="text-xl text-gray-600">
            Browse verified biodiversity net gain credits from trusted landowners
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by location or project name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={habitatFilter} onValueChange={setHabitatFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Habitat Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Habitats</SelectItem>
                <SelectItem value="woodland">Woodland</SelectItem>
                <SelectItem value="wetland">Wetland</SelectItem>
                <SelectItem value="grassland">Grassland</SelectItem>
                <SelectItem value="heathland">Heathland</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="area-large">Area: Largest First</SelectItem>
                <SelectItem value="area-small">Area: Smallest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedListings.length} of {mockListings.length} available credits
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sortedListings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                {listing.verified && (
                  <Badge className="absolute top-2 right-2 bg-green-600 text-white">
                    ✓ Verified
                  </Badge>
                )}
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg line-clamp-2">{listing.title}</CardTitle>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{listing.price}</p>
                    <p className="text-sm text-gray-500">{listing.pricePerUnit}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{listing.location}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <Badge variant="outline">{listing.habitat}</Badge>
                  <span className="text-sm font-medium">{listing.area}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{listing.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-600">{listing.seller}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Delivery: {listing.deliveryDate}</span>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{listing.title}</DialogTitle>
                      <DialogDescription>
                        {listing.location} • {listing.habitat} • {listing.area}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Project Details</h4>
                          <p className="text-gray-600 mb-4">{listing.description}</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Total Area:</span>
                              <span>{listing.area}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Units Available:</span>
                              <span>{listing.units}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Expected Delivery:</span>
                              <span>{listing.deliveryDate}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Pricing</h4>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-green-600 mb-1">
                              {listing.price}
                            </div>
                            <div className="text-sm text-gray-600">
                              {listing.pricePerUnit}
                            </div>
                          </div>
                          <div className="mt-4 space-y-2">
                            <Button className="w-full bg-green-600 hover:bg-green-700">
                              Purchase Credits
                            </Button>
                            <Button variant="outline" className="w-full">
                              Contact Seller
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buyer;
