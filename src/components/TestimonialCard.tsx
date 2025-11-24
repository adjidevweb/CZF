import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const TestimonialCard = ({ name, location, rating, text }: TestimonialCardProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-12 w-12 bg-accent/20">
            <AvatarFallback className="text-accent font-semibold">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
        
        <div className="flex space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-accent text-accent" : "fill-muted text-muted"
              }`}
            />
          ))}
        </div>
        
        <p className="text-muted-foreground leading-relaxed italic">"{text}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
