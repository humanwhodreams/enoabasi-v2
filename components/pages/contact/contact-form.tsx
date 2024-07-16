import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Props {}

export function ContactForm({}: Props) {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="email@example.com" />
        </div>
        <div className="col-span-1 space-y-2">
          <Label>Inquiry</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Inquiry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="collab">Collaboration</SelectItem>
              <SelectItem value="question">Question</SelectItem>
              <SelectItem value="chat">Just a chat</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1 md:col-span-2 space-y-2">
          <Label>Message</Label>
          <Textarea placeholder="Enter message" />
        </div>

        <Button className="col-span-1 md:col-span-1">Submit</Button>
      </div>
    </form>
  );
}
