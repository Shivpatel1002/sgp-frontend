import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Mail, Phone, MapPin, Award, Calendar } from 'lucide-react';
import { LawyerSidebar } from '@/components/lawyer/LawyerSidebar';
import { LawyerTopBar } from '@/components/lawyer/LawyerTopBar';
import AvailabilityManager from '@/components/lawyer/AvailabilityManager';

const LawyerProfile = () => {
  const [currentPage, setCurrentPage] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <LawyerSidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <div className="flex-1 flex flex-col">
        <LawyerTopBar />
        
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl lg:text-3xl font-bold text-navy mb-6">Profile</h1>

            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="profile">Profile Information</TabsTrigger>
                <TabsTrigger value="availability">Availability</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Profile Card */}
                  <Card className="shadow-soft border-0 lg:col-span-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-24 h-24 bg-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">DS</span>
                      </div>
                      <h2 className="text-xl font-semibold text-navy mb-2">Dr. Sarah Smith</h2>
                      <p className="text-gray-600 mb-4">Family Law Specialist</p>
                      <Badge className="mb-4">Verified Lawyer</Badge>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <span>sarah.smith@law.com</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>+1 234-567-8900</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>New York, NY</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Profile Form */}
                  <Card className="shadow-soft border-0 lg:col-span-2">
                    <CardHeader>
                      <CardTitle>Edit Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <Input defaultValue="Sarah" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <Input defaultValue="Smith" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <Input type="email" defaultValue="sarah.smith@law.com" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <Input defaultValue="+1 234-567-8900" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Specialization
                        </label>
                        <Input defaultValue="Family Law" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Years of Experience
                        </label>
                        <Input defaultValue="15" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bio
                        </label>
                        <Textarea 
                          defaultValue="Experienced family law attorney with over 15 years of practice..."
                          rows={4}
                        />
                      </div>

                      <Button className="w-full bg-teal hover:bg-teal-light text-white">
                        Save Changes
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="availability">
                <AvailabilityManager />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LawyerProfile;
