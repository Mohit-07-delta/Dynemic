# Placeholder Image Replacement Guide

When real photos are ready, replace each placeholder div with an <img> or Next.js <Image> tag.

## Hero Section
| Placeholder ID          | Where                    | Suggested Real Photo              |
|-------------------------|--------------------------|-----------------------------------|
| student-hero-placeholder.jpg | HeroSection.tsx ~L296 | Group photo of students in class, portrait aspect (4:5) |

## Hall of Fame — Topper Cards
| Placeholder ID     | Student    | Where                  |
|--------------------|------------|------------------------|
| topper-photo-placeholder (×6) | All 6 cards | HallOfFame.tsx — replace initials `<div>` with circular <img> |

## Gallery Section
| alt text                       | Caption                          | Tile Shape |
|-------------------------------|----------------------------------|------------|
| classroom-session-1           | Daily Classroom Sessions          | Wide (2×1) |
| topper-felicitation-2025      | Topper Felicitation 2025          | Tall (1×2) |
| test-environment-1            | Weekly Test Series                | Square     |
| republic-day-celebration-1    | Republic Day Celebration 2026     | Square     |
| science-lab-session-1         | Hands-on Science Lab              | Big (2×2)  |
| annual-prize-distribution-2025| Annual Prize Distribution         | Wide (2×1) |
| parent-teacher-meeting-1      | Parent-Teacher Meeting            | Square     |
| independence-day-celebration-1| Independence Day 2025             | Tall (1×2) |
| doubt-clearing-session-1      | One-on-One Doubt Clearing         | Square     |
| result-celebration-2025       | Result Day Celebrations 2025      | Wide (2×1) |

## How to Replace a Placeholder
Replace the placeholder `<div role="img" aria-label="...">` with:
```tsx
<Image
  src="/images/your-photo.jpg"
  alt="Descriptive alt text"
  fill
  className="object-cover"
  sizes="..."
/>
```
Store photos in: frontend/public/images/
