'use client';

import * as React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface ConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export function ConfirmationDialog({ open, onOpenChange, onConfirm }: ConfirmationDialogProps) {
  const [agreed, setAgreed] = React.useState(false);

  const handleContinue = () => {
    if (agreed) {
      onConfirm();
      onOpenChange(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Terms & Conditions</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="max-h-60 overflow-y-auto pr-4 text-sm text-muted-foreground space-y-3">
              <p>
                <strong>Respectful Use:</strong> You agree not to upload harmful, offensive,
                illegal, or copyrighted content.
              </p>
              <p>
                <strong>Photo Processing:</strong> Any photo you upload is sent only to an AI
                model (Gemini) for the purpose of generating a compliment.
              </p>
              <p>
                <strong>No Storage:</strong> Photos are not stored, saved, or shared by this
                app after processing.
              </p>
              <p>
                <strong>Privacy:</strong> No personal data is collected beyond the photo you
                choose to upload for generating a compliment.
              </p>
              <p>
                <strong>AI-Generated Output:</strong> Compliments are generated automatically by
                AI. The creator does not guarantee accuracy, appropriateness, or availability of
                the service.
              </p>
              <p>
                <strong>Liability:</strong> The creator is not responsible for misuse of the app
                or for any consequences arising from the generated compliments.
              </p>
              <p>
                <strong>Consent:</strong> By checking the box and continuing, you confirm that you
                understand and agree to these terms.
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex items-center space-x-2 pt-4">
          <Checkbox
            id="terms"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
          />
          <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            I agree to the Terms & Conditions
          </Label>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleContinue} disabled={!agreed}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
