'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function NoteDialog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline'>+ New Note</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a New Note</DialogTitle>
                    <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button onClick={() => console.log({ title, content })}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    );
}