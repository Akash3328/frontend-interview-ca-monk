import {
  Share,
  Link as LinkIcon,
  Linkedin,
  MessageCircle,
  Mail,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { getShareUrl } from "../utils/share";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface Props {
  id: string | number;
  title: string;
}

export function ShareMenu({ id, title }: Props) {
  const [open, setOpen] = useState(false);
  const url = getShareUrl(id);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    toast({
      title: "Link copied",
      description: "Share this blog with others",
    });
  };

  return (
    <div className="relative pt-16">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(!open)}
        className="flex gap-2 items-center"
      >
        <Share size={16} /> Share
      </Button>

      {open && (
        <div className="absolute top-full right-0 bg-white border shadow-md rounded-md w-44 p-2 z-50 space-y-1">
          <button onClick={copyLink} className="w-full flex items-center gap-2 text-sm px-2 py-1 hover:bg-gray-100 rounded">
            <LinkIcon size={14} /> Copy Link
          </button>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
            target="_blank"
            className="w-full flex items-center gap-2 text-sm px-2 py-1 hover:bg-gray-100 rounded"
          >
            <Linkedin size={14} /> LinkedIn
          </a>

          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`}
            target="_blank"
            className="w-full flex items-center gap-2 text-sm px-2 py-1 hover:bg-gray-100 rounded"
          >
            <MessageCircle size={14} /> WhatsApp
          </a>

          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
            target="_blank"
            className="w-full flex items-center gap-2 text-sm px-2 py-1 hover:bg-gray-100 rounded"
          >
            <Twitter size={14} /> X (Twitter)
          </a>

          <a
            href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
            className="w-full flex items-center gap-2 text-sm px-2 py-1 hover:bg-gray-100 rounded"
          >
            <Mail size={14} /> Email
          </a>
        </div>
      )}
    </div>
  );
}
