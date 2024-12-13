import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, X } from 'lucide-react';
import { useRegistration } from '@/contexts/RegistrationContext';

export const StudentInfo = () => {
  const { students, handleStudentChange, addStudent, removeStudent } = useRegistration();

  return (
    <div className="space-y-6">
      {students.map((student, index) => (
        <Card key={student.id} className="bg-gray-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">
              Student {index + 1}
            </CardTitle>
            {students.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeStudent(student.id)}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>First Name</Label>
                  <Input
                    value={student.firstName}
                    onChange={(e) => handleStudentChange(student.id, 'firstName', e.target.value)}
                  />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input
                    value={student.lastName}
                    onChange={(e) => handleStudentChange(student.id, 'lastName', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label>Grade</Label>
                <Select 
                  value={student.grade}
                  onValueChange={(value) => handleStudentChange(student.id, 'grade', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {[7, 8, 9, 10, 11, 12].map((grade) => (
                      <SelectItem key={grade} value={grade.toString()}>
                        Grade {grade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>School</Label>
                <Input
                  value={student.school}
                  onChange={(e) => handleStudentChange(student.id, 'school', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button
        onClick={addStudent}
        variant="outline"
        className="w-full"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Another Student
      </Button>
    </div>
  );
};