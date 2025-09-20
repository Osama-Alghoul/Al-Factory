import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote } from "lucide-react"; // Import Quote icon
import { feedbackData } from "@/types";

export function FeedbackCard({
  feedback: feedbackData,
}: {
  feedback: feedbackData;
}) {
  const feedback = feedbackData;
  const renderStars = (rating: number) => {
    const stars = Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ) : (
        <Star className="h-4 w-4 fill-muted-foreground text-muted-foreground" />
      )
    );
    return stars;
  };
  return (
    <Card className="relative">
      <Quote className="absolute top-2 right-2 h-6 w-6 text-muted-foreground fill-muted-foreground opacity-5" />
      <Quote className="absolute bottom-2 left-2 h-6 w-6 rotate-180 text-muted-foreground fill-muted-foreground opacity-25" />
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={feedback.avatarUrl} alt={feedback.name} />
          <AvatarFallback>{feedback.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="font-semibold">{feedback.name}</p>
          <div className="text-sm text-muted-foreground flex">
            {renderStars(feedback.rating)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="leading-snug text-muted-foreground">
          "{feedback.review}"
        </p>
      </CardContent>
    </Card>
  );
}
