import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'transition-all duration-300 font-medium';
  
  const variants = {
    primary: 'bg-[#A47551] text-white hover:bg-[#8B6344] active:bg-[#725236]',
    secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300',
    outline: 'border-2 border-[#A47551] text-[#A47551] hover:bg-[#A47551] hover:text-white active:bg-[#8B6344]',
    ghost: 'text-neutral-700 hover:bg-[#A47551]/10 dark:text-neutral-300 dark:hover:bg-[#A47551]/20'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};