import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileDown, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Define types for student grades
interface StudentGrade {
  id: number;
  studentId: number;
  name: string;
  lastName: string;
  mathGrade: number;
  languageGrade: number;
  scienceGrade: number;
  artGrade: number;
  averageGrade: number;
  level: string;
  classroom: number;
}

interface StudentGradesTableProps {
  students: StudentGrade[];
  classroom: number;
}

// Helper function to get a color based on grade
const getGradeColor = (grade: number) => {
  if (grade >= 90) return "text-emerald-600 dark:text-emerald-400 font-medium";
  if (grade >= 80) return "text-blue-600 dark:text-blue-400 font-medium";
  if (grade >= 70) return "text-amber-600 dark:text-amber-400 font-medium";
  return "text-red-600 dark:text-red-400 font-medium";
};

// Helper function to get a background based on level
const getLevelBackground = (level: string) => {
  switch (level) {
    case "Básico":
      return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300";
    case "Intermedio":
      return "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300";
    case "Avanzado":
      return "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300";
    default:
      return "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300";
  }
};

export function StudentGradesTable({ students, classroom }: StudentGradesTableProps) {
  const handleExportGrades = () => {
    // This would export the grades to a CSV or Excel file
    console.log("Exporting grades for classroom", classroom);
  };

  const handleGenerateReports = () => {
    // This would use AI to generate personalized reports
    console.log("Generating AI reports for classroom", classroom);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Calificaciones por Estudiante</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={handleExportGrades}>
            <FileDown className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button size="sm" onClick={handleGenerateReports}>
            <Sparkles className="h-4 w-4 mr-2" />
            Generar Informes IA
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Estudiante</TableHead>
            <TableHead>Matemáticas</TableHead>
            <TableHead>Lenguaje</TableHead>
            <TableHead>Ciencias</TableHead>
            <TableHead>Arte</TableHead>
            <TableHead>Promedio</TableHead>
            <TableHead>Nivel</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.length > 0 ? (
            students.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">
                  {student.name} {student.lastName}
                </TableCell>
                <TableCell className={getGradeColor(student.mathGrade)}>
                  {student.mathGrade}
                </TableCell>
                <TableCell className={getGradeColor(student.languageGrade)}>
                  {student.languageGrade}
                </TableCell>
                <TableCell className={getGradeColor(student.scienceGrade)}>
                  {student.scienceGrade}
                </TableCell>
                <TableCell className={getGradeColor(student.artGrade)}>
                  {student.artGrade}
                </TableCell>
                <TableCell className={getGradeColor(student.averageGrade)}>
                  <strong>{student.averageGrade}</strong>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`${getLevelBackground(student.level)} border-0`}
                  >
                    {student.level}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                No hay calificaciones disponibles para este salón
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}