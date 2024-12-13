This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Folder structure

```bash
| public
| src
|   | components
|   |   | ui
|   |   |   | Button.tsx
|   |   |   | card.tsx
|   |   | HOC
|   |   |   | ListCard.tsx
|   |   |   | ModalCard.tsx
|   |   | pageComponents
|   |   |   | NotificaitonList.tsx
|   | app
|   |   | NotificaitonPage.tsx
```

UI --- standalone in nature, NO DEPENDECY ON ANY OTHER COMPONENTS, contains possible stylings
HOC --- Higher Order Components, dependent on UI components, contains possible logic
PageCompoents --- Contains the page Specicific Compoentns, possibly contains HOC, UI
app --- routes, and contains the entire page.

-- NOTE: instead of dumping everything into the app folder, try to distribute it into the pagecomponents

## Commits

- try to commit files into there own branches
- do not push into the main branch directly
