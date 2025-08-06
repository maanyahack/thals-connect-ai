import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface UserTypeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  onClick: () => void;
  gradient?: string;
}

export const UserTypeCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  buttonText, 
  onClick,
  gradient = "bg-gradient-trust"
}: UserTypeCardProps) => {
  return (
    <Card className="relative overflow-hidden hover:shadow-glow transition-all duration-500 hover:scale-105 border-2 border-primary/10 group">
      <div className={`absolute inset-0 opacity-5 ${gradient}`} />
      <CardHeader className="relative">
        <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse-medical">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-foreground">
              <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          variant="medical" 
          className="w-full"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};