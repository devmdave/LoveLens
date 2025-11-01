'use client';

import { useCallback, useState } from 'react';
import type { ChangeEvent, DragEvent } from 'react';
import { UploadCloud, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface ImageUploaderProps {
  onChange: (dataUrl: string) => void;
  className?: string;
}

export function ImageUploader({ onChange, className }: ImageUploaderProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (file: File | null) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setImagePreview(dataUrl);
        onChange(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFileChange(e.target.files?.[0] || null);
  };

  const onDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files[0]);
  }, []);

  const onDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const onRemoveImage = () => {
    setImagePreview(null);
    onChange('');
  };

  return (
    <div className={cn('relative', className)}>
      {imagePreview ? (
        <div className="relative group aspect-video w-full">
          <Image
            src={imagePreview}
            alt="Uploaded image preview"
            fill
            className="object-contain rounded-md"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={onRemoveImage}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Remove image</span>
          </Button>
        </div>
      ) : (
        <div
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          className={cn(
            'relative flex flex-col items-center justify-center w-full aspect-video rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/25 cursor-pointer hover:bg-muted/50 transition-colors',
            isDragging && 'border-primary bg-primary/10'
          )}
        >
          <label htmlFor="file-upload" className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
            <UploadCloud className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground font-semibold">
              <span className="text-primary">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">Any image format (PNG, JPG, GIF, etc.)</p>
          </label>
          <input id="file-upload" type="file" className="sr-only" onChange={onInputChange} accept="image/*" />
        </div>
      )}
    </div>
  );
}
