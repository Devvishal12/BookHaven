import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
          <div>
            <Button variant="elevated">
              button
            </Button>
          </div>
          <div>
            <Input placeholder="input"/>
          </div>
          <Progress value={50} className="w-56" />
      </div>
      <div>
        <Textarea placeholder="textarea" />
      </div>
      <div>
        <Checkbox id="checkbox" />  
      </div>
    </div>
  );
}
