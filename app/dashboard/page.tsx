import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Plus, Calendar, Users, CheckSquare, Clock, AlertCircle } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening with your projects.</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <CheckSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Across all projects</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overdue Tasks</CardTitle>
              <AlertCircle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">3</div>
              <p className="text-xs text-muted-foreground">Need immediate attention</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>Your most active projects this week</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">E-commerce Redesign</h4>
                  <p className="text-sm text-gray-600">Frontend Development</p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary">In Progress</Badge>
                  <div className="text-sm text-gray-600 mt-1">75% complete</div>
                </div>
              </div>
              <Progress value={75} className="h-2" />

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Mobile App Backend</h4>
                  <p className="text-sm text-gray-600">API Development</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline">Planning</Badge>
                  <div className="text-sm text-gray-600 mt-1">25% complete</div>
                </div>
              </div>
              <Progress value={25} className="h-2" />

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Database Migration</h4>
                  <p className="text-sm text-gray-600">Infrastructure</p>
                </div>
                <div className="text-right">
                  <Badge>Completed</Badge>
                  <div className="text-sm text-gray-600 mt-1">100% complete</div>
                </div>
              </div>
              <Progress value={100} className="h-2" />
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Tasks and milestones due soon</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-red-500" />
                <div className="flex-1">
                  <h4 className="font-medium">UI Design Review</h4>
                  <p className="text-sm text-gray-600">E-commerce Redesign</p>
                </div>
                <Badge variant="destructive">Today</Badge>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-orange-500" />
                <div className="flex-1">
                  <h4 className="font-medium">API Documentation</h4>
                  <p className="text-sm text-gray-600">Mobile App Backend</p>
                </div>
                <Badge variant="secondary">Tomorrow</Badge>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-blue-500" />
                <div className="flex-1">
                  <h4 className="font-medium">Testing Phase</h4>
                  <p className="text-sm text-gray-600">Database Migration</p>
                </div>
                <Badge variant="outline">3 days</Badge>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-green-500" />
                <div className="flex-1">
                  <h4 className="font-medium">Client Presentation</h4>
                  <p className="text-sm text-gray-600">E-commerce Redesign</p>
                </div>
                <Badge variant="outline">1 week</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
