import React from 'react';

export function Button({ label }: { label: string }) {
  return (
    <div data-testid="btncustom">
      {label}
    </div>
  );
}
