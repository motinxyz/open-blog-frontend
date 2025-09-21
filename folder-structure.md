src/
├── components/          # Global, reusable UI components (e.g., Button, Modal)
└── features/            # Renamed 'domains' to 'features' (a common convention)
    └── posts/
        ├── api/         # Functions for fetching data (e.g., getPosts, createPost)
        ├── components/  # React components used only by the 'posts' feature
        │   ├── PostCard.jsx
        │   └── CreatePostForm.jsx
        ├── context/     # Context providers for this feature
        │   └── PostsProvider.jsx
        ├── hooks/       # Custom hooks for this feature (e.g., usePosts)
        └── pages/       # Top-level components for your routes
            ├── PostsPage.jsx
            └── CreatePostPage.jsx
