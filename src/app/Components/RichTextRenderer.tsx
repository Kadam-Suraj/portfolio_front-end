import { PortableText } from '@portabletext/react';

// Helper to convert text to kebab-case
const toKebabCase = (str: string) => {
    return str
        .toLowerCase()
        .replace(/[0-9]/g, '')            // remove numbers
        .replace(/[^a-z]+/g, '-')         // replace non-alphabet with hyphen
        .replace(/^-+|-+$/g, '');         // trim hyphens
}

// Extract plain text from children
const getTextFromChildren = (children: React.ReactNode[]) => {
    if (!children) return '';
    return children.map(child => (typeof child === 'string' ? child : child?.props?.children || '')).join(' ');
};

const components = {
    block: ({ children, value }: { children: React.ReactNode[], value: { style: string } }) => {
        const tag = getTag(value.style);
        const textContent = getTextFromChildren(children);
        const kebabId = textContent ? toKebabCase(textContent) : undefined;

        const Tag = tag || 'p';

        return (
            <Tag id={kebabId} className="scroll-mt-20">
                {children}
            </Tag>
        );
    },
    marks: {
        code: ({ children }: { children: React.ReactNode }) => (
            <code className="bg-gray-100 px-1 rounded">{children}</code>
        )
    }
};

// Convert block style to tag
const getTag = (style: string) => {
    switch (style) {
        case 'h1':
            return 'h1';
        case 'h2':
            return 'h2';
        case 'h3':
            return 'h3';
        case 'h4':
            return 'h4';
        case 'h5':
            return 'h5';
        case 'h6':
            return 'h6';
        default:
            return 'p';
    }
};

export default function RichTextRenderer({ content }: { content: any }) {
    return (
        <div className="prose prose-sm prose-code:bg-accent prose-code:px-2 prose-code:py-1 prose-code:rounded-md dark:prose-invert w-full">
            <PortableText value={content} components={components} />
        </div>
    );
}
