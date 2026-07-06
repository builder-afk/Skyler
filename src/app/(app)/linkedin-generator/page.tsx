import { LinkedInGenerator } from "@/components/linkedin/linkedin-generator";

export const metadata = {
  title: "LinkedIn Post Generator | Skyler",
  description: "Drive your content pipeline with AI-powered LinkedIn posts and strategy.",
};

export default function LinkedInGeneratorPage() {
  return (
    <div className="container py-10">
      <LinkedInGenerator />
    </div>
  );
}
