'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { signup } from '@/lib/auth-actions';
import { Mail, Lock, CheckCheck } from 'lucide-react';
import { ModeToggle } from '@/components/ModeToggle';
import SignInWithGoogleButton from '../../login/components/SignInWithGoogleButton';

export default function SignupForm() {
  return (
    <>
      <div className="absolute">
        <ModeToggle />
      </div>
      <div className="min-h-screen flex items-center justify-center dark:bg-black">
        <Card className="w-full max-w-md shadow-lg rounded-xl border-0 dark:bg-black">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-medium relative top-5">
              Create an Account
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <CheckCheck className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="pl-9"
                  />
                </div>
              </div>
              <Button type="submit" formAction={signup} className="w-full">
                Sign Up
              </Button>
            </form>
            <div className="flex items-center justify-center">
              <span className="text-xs font-bold text-muted-foreground">OR</span>
            </div>
             <div>
            <SignInWithGoogleButton />
          </div>
            <p className="text-sm text-center text-muted-foreground pt-2">
              Already have an account?{' '}
              <Link
                href="/login"
                className="font-semibold text-primary hover:underline"
              >
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
