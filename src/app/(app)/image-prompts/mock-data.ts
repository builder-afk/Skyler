export interface ColorSwatch {
  name: string
  hex: string
}

export interface KeyElements {
  colorPalette: ColorSwatch[]
  typography: string
  layout: string
  spacing: string
  standoutDetails: string
}

export interface AnalysisResult {
  styleSummary: string
  designKeywords: string[]
  keyElements: KeyElements
  readyToUsePrompt: string
}

export interface GalleryItem {
  id: string
  url: string
  title: string
  analysis: AnalysisResult
}

export const MOCK_GALLERY: GalleryItem[] = [
  {
    "id": "nat1",
    "url": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800",
    "title": "Misty Mountain Forest",
    "analysis": {
      "styleSummary": "A moody, atmospheric landscape featuring dense evergreen forests shrouded in morning mist. It evokes a sense of calm, isolation, and raw natural beauty.",
      "designKeywords": [
        "Moody",
        "Atmospheric",
        "Forest",
        "Mountains",
        "Nature",
        "Fog",
        "Dark Green"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Deep Pine",
            "hex": "#1B2A22"
          },
          {
            "name": "Fog Gray",
            "hex": "#A4B0AF"
          },
          {
            "name": "Muted Sage",
            "hex": "#5D6F61"
          },
          {
            "name": "Charcoal",
            "hex": "#1E2022"
          }
        ],
        "typography": "N/A",
        "layout": "Vast, open composition emphasizing the scale of the mountains compared to the trees.",
        "spacing": "Expansive. The fog acts as negative space, separating the layers of the forest.",
        "standoutDetails": "The atmospheric perspective created by the thick fog creates distinct layers of depth."
      },
      "readyToUsePrompt": "A moody, atmospheric landscape photograph of a dense evergreen forest shrouded in thick morning mist. Towering mountains in the background. Deep pine greens and cool fog grays. Cinematic lighting, drone photography, 8k resolution, photorealistic, National Geographic style."
    }
  },
  {
    "id": "nat2",
    "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800",
    "title": "Golden Hour Mountain Peak",
    "analysis": {
      "styleSummary": "A breathtaking golden hour landscape, featuring warm sunlight hitting the peaks of rugged mountains. It communicates adventure, majesty, and warmth.",
      "designKeywords": [
        "Golden Hour",
        "Mountains",
        "Warm Lighting",
        "Adventure",
        "Landscape",
        "Epic"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Sunset Gold",
            "hex": "#FFB347"
          },
          {
            "name": "Warm Orange",
            "hex": "#E07A5F"
          },
          {
            "name": "Deep Shadow",
            "hex": "#264653"
          },
          {
            "name": "Sky Blue",
            "hex": "#8AB4F8"
          }
        ],
        "typography": "N/A",
        "layout": "Rule of thirds, with the glowing mountain peak serving as the primary focal point.",
        "spacing": "Vast and awe-inspiring, drawing the eye upward.",
        "standoutDetails": "The stark contrast between the warm illuminated peaks and the cool, deep blue shadows."
      },
      "readyToUsePrompt": "An epic landscape photograph of a rugged mountain peak during golden hour. Warm, glowing orange and gold sunlight hitting the snow-capped rocks, contrasted with deep cool blue shadows in the valleys. Shot on 35mm lens, f/8, hyper-detailed, breathtaking nature photography."
    }
  },
  {
    "id": "nat3",
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    "title": "Tropical White Sand Beach",
    "analysis": {
      "styleSummary": "A bright, vibrant tropical beach scene with crystal clear turquoise water and pristine white sand. It evokes relaxation, paradise, and summer energy.",
      "designKeywords": [
        "Tropical",
        "Beach",
        "Ocean",
        "Vibrant",
        "Turquoise",
        "Relaxing",
        "Summer"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Turquoise Water",
            "hex": "#40E0D0"
          },
          {
            "name": "White Sand",
            "hex": "#FFFDD0"
          },
          {
            "name": "Sky Blue",
            "hex": "#87CEEB"
          },
          {
            "name": "Palm Green",
            "hex": "#228B22"
          }
        ],
        "typography": "N/A",
        "layout": "Horizontal composition divided by the horizon line, emphasizing the vast ocean.",
        "spacing": "Wide and open, creating a sense of freedom.",
        "standoutDetails": "The gradient of the water color from clear shallow white to deep turquoise."
      },
      "readyToUsePrompt": "A vibrant tropical beach scene with pristine white sand and crystal clear turquoise water. A bright blue sky with a few fluffy white clouds. A palm tree leaning gently over the water. High key lighting, vibrant colors, travel photography, relaxing paradise aesthetic, 4k."
    }
  },
  {
    "id": "nat4",
    "url": "https://images.unsplash.com/photo-1516214104703-d2507c6f4e89?auto=format&fit=crop&q=80&w=800",
    "title": "Dense Jungle Canopy",
    "analysis": {
      "styleSummary": "A lush, immersive view looking up into a dense tropical jungle canopy. Sunlight filters through the vibrant green leaves, creating a sense of life and wild growth.",
      "designKeywords": [
        "Jungle",
        "Lush",
        "Canopy",
        "Sunbeams",
        "Greenery",
        "Vibrant",
        "Organic"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Vibrant Leaf",
            "hex": "#4CAF50"
          },
          {
            "name": "Deep Canopy",
            "hex": "#1B5E20"
          },
          {
            "name": "Sunbeam Yellow",
            "hex": "#FFF59D"
          },
          {
            "name": "Bark Brown",
            "hex": "#5D4037"
          }
        ],
        "typography": "N/A",
        "layout": "Looking directly upward (worm's-eye view), creating radial lines pointing towards the central sunlight.",
        "spacing": "Dense and textured, filling the entire frame with organic shapes.",
        "standoutDetails": "The god rays (crepuscular rays) piercing through the thick foliage."
      },
      "readyToUsePrompt": "A lush, dense tropical jungle canopy looking straight up at the sky. Vibrant green palm leaves and vines overlapping. Bright god rays of sunlight piercing through the foliage. Immersive, organic, highly detailed nature photography, vibrant colors, rich textures."
    }
  },
  {
    "id": "nat5",
    "url": "https://images.unsplash.com/photo-1445217143695-4671dc315b22?auto=format&fit=crop&q=80&w=800",
    "title": "Autumn Forest Path",
    "analysis": {
      "styleSummary": "A warm, nostalgic autumn scene featuring a path winding through a forest of trees with bright orange and red leaves. It evokes coziness, transition, and crisp air.",
      "designKeywords": [
        "Autumn",
        "Fall Colors",
        "Forest Path",
        "Warm",
        "Nostalgic",
        "Cozy"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Burnt Orange",
            "hex": "#CC5500"
          },
          {
            "name": "Golden Yellow",
            "hex": "#FFD700"
          },
          {
            "name": "Crimson Red",
            "hex": "#8B0000"
          },
          {
            "name": "Earthy Brown",
            "hex": "#654321"
          }
        ],
        "typography": "N/A",
        "layout": "Leading lines created by the winding path, drawing the viewer into the depths of the forest.",
        "spacing": "Balanced, with the dense trees framing the open path.",
        "standoutDetails": "The incredible saturation and variety of the warm foliage colors against the dark trunks."
      },
      "readyToUsePrompt": "A beautiful autumn forest with a winding dirt path. The trees are covered in vibrant red, orange, and golden yellow leaves. Fallen leaves blanket the ground. Soft, diffused autumn sunlight. Cozy, nostalgic atmosphere, highly detailed landscape photography, warm color grading."
    }
  },
  {
    "id": "nat6",
    "url": "https://images.unsplash.com/photo-1470071131384-001b85755536?auto=format&fit=crop&q=80&w=800",
    "title": "Calm Lake Reflection",
    "analysis": {
      "styleSummary": "A perfectly still alpine lake reflecting the surrounding mountains and sky like a mirror. It communicates peace, symmetry, and perfect stillness.",
      "designKeywords": [
        "Lake",
        "Reflection",
        "Symmetry",
        "Calm",
        "Peaceful",
        "Alpine",
        "Cool Tones"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Deep Water Blue",
            "hex": "#1E3F66"
          },
          {
            "name": "Sky Cyan",
            "hex": "#73C2FB"
          },
          {
            "name": "Stone Gray",
            "hex": "#8A9A5B"
          },
          {
            "name": "Snow White",
            "hex": "#F0F8FF"
          }
        ],
        "typography": "N/A",
        "layout": "Perfect horizontal symmetry, with the horizon line splitting the image exactly in half.",
        "spacing": "Expansive and perfectly balanced.",
        "standoutDetails": "The flawless mirror-like quality of the water's surface."
      },
      "readyToUsePrompt": "A perfectly calm alpine lake acting as a flawless mirror, reflecting the towering pine trees and snow-capped mountains. A clear blue sky. Perfect horizontal symmetry. Peaceful, serene, ultra-sharp landscape photography, cool color palette, 8k."
    }
  },
  {
    "id": "nat7",
    "url": "https://images.unsplash.com/photo-1437482078695-73f5af6b6d57?auto=format&fit=crop&q=80&w=800",
    "title": "Macro Dew Drops on Leaf",
    "analysis": {
      "styleSummary": "An extreme close-up of a vibrant green leaf covered in perfect, spherical morning dew drops. It highlights incredible detail, freshness, and organic geometry.",
      "designKeywords": [
        "Macro",
        "Dew Drops",
        "Leaf",
        "Fresh",
        "Green",
        "Detailed",
        "Organic Geometry"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Spring Green",
            "hex": "#00FF7F"
          },
          {
            "name": "Lime",
            "hex": "#32CD32"
          },
          {
            "name": "Deep Vein Green",
            "hex": "#006400"
          },
          {
            "name": "Water Highlight",
            "hex": "#E0FFFF"
          }
        ],
        "typography": "N/A",
        "layout": "Abstract framing, focusing purely on texture rather than the whole object.",
        "spacing": "Intimate and microscopic. Shallow depth of field blurs the background entirely.",
        "standoutDetails": "The tiny, inverted reflections visible inside each perfectly spherical water drop."
      },
      "readyToUsePrompt": "Extreme macro photography of a vibrant green leaf covered in spherical morning dew drops. Incredible detail showing the cellular texture of the leaf. Shallow depth of field with a beautifully blurred bokeh background. Fresh, vibrant, hyper-realistic, 8k resolution."
    }
  },
  {
    "id": "nat8",
    "url": "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?auto=format&fit=crop&q=80&w=800",
    "title": "Vast Sand Dunes",
    "analysis": {
      "styleSummary": "A minimalist, abstract landscape of vast desert sand dunes under a clear sky. It communicates heat, scale, and the beauty of natural geometric curves.",
      "designKeywords": [
        "Desert",
        "Sand Dunes",
        "Minimalist",
        "Warm",
        "Curves",
        "Abstract Landscape"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Dune Gold",
            "hex": "#C2B280"
          },
          {
            "name": "Shadow Bronze",
            "hex": "#8B7355"
          },
          {
            "name": "Pale Blue Sky",
            "hex": "#B0E0E6"
          },
          {
            "name": "Sunlight Yellow",
            "hex": "#F5DEB3"
          }
        ],
        "typography": "N/A",
        "layout": "Sweeping, intersecting S-curves created by the ridges of the dunes.",
        "spacing": "Empty and boundless, emphasizing isolation and scale.",
        "standoutDetails": "The stark, razor-sharp contrast between the sunlit side of the dune and the side in deep shadow."
      },
      "readyToUsePrompt": "A minimalist landscape photograph of vast desert sand dunes under a clear pale blue sky. Sweeping, elegant curves. Stark contrast between the warm golden sunlit sand and the cool bronze shadows. High resolution, National Geographic style, abstract nature aesthetic."
    }
  },
  {
    "id": "nat9",
    "url": "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800",
    "title": "Raging Waterfall",
    "analysis": {
      "styleSummary": "A powerful, dynamic shot of a massive waterfall crashing down into a misty gorge. It conveys raw energy, motion, and the unstoppable force of nature.",
      "designKeywords": [
        "Waterfall",
        "Dynamic",
        "Powerful",
        "Motion",
        "Nature",
        "Misty",
        "Epic"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "White Water",
            "hex": "#F0F8FF"
          },
          {
            "name": "Deep River Blue",
            "hex": "#005C8A"
          },
          {
            "name": "Moss Green",
            "hex": "#4A5D23"
          },
          {
            "name": "Dark Wet Rock",
            "hex": "#2F4F4F"
          }
        ],
        "typography": "N/A",
        "layout": "Vertical orientation emphasizing the height and falling motion of the water.",
        "spacing": "Dense with texture and mist, with no clear empty space.",
        "standoutDetails": "The motion blur of the falling water contrasting with the sharp, jagged rocks."
      },
      "readyToUsePrompt": "An epic landscape photograph of a powerful, raging waterfall crashing down into a misty gorge. Dark, wet, moss-covered rocks frame the cascading white water. Long exposure creating a smooth, silky effect on the water while keeping the rocks hyper-sharp. Moody, raw energy, 8k."
    }
  },
  {
    "id": "nat10",
    "url": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=800",
    "title": "Deep Ocean Waves",
    "analysis": {
      "styleSummary": "A moody, textured close-up of dark ocean waves rolling. It evokes depth, mystery, and the rhythmic power of the sea.",
      "designKeywords": [
        "Ocean",
        "Waves",
        "Moody",
        "Dark Blue",
        "Texture",
        "Rhythm",
        "Mysterious"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Abyss Blue",
            "hex": "#001F3F"
          },
          {
            "name": "Midnight Teal",
            "hex": "#003366"
          },
          {
            "name": "Foam Gray",
            "hex": "#B0C4DE"
          },
          {
            "name": "Slate",
            "hex": "#708090"
          }
        ],
        "typography": "N/A",
        "layout": "Abstract, filling the entire frame with the undulating texture of the water.",
        "spacing": "Dense and heavy, conveying the immense weight of the ocean.",
        "standoutDetails": "The fine, lacelike patterns of the white foam on the dark water surface."
      },
      "readyToUsePrompt": "A moody, textured photograph of dark, rolling ocean waves. Deep abyssal blues and midnight teals. Fine, lacelike white sea foam tracing the peaks of the swells. Abstract, powerful nature photography, oceanic aesthetic, highly detailed."
    }
  },
  {
    "id": "nat11",
    "url": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=800",
    "title": "Sunflowers at Sunset",
    "analysis": {
      "styleSummary": "A joyful, vibrant field of sunflowers basking in the warm light of a setting sun. It communicates happiness, warmth, and pastoral beauty.",
      "designKeywords": [
        "Sunflowers",
        "Sunset",
        "Vibrant",
        "Warm",
        "Happy",
        "Floral",
        "Pastoral"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Sunflower Yellow",
            "hex": "#FFC300"
          },
          {
            "name": "Sunset Orange",
            "hex": "#FF5733"
          },
          {
            "name": "Stem Green",
            "hex": "#6B8E23"
          },
          {
            "name": "Dark Center",
            "hex": "#3E2723"
          }
        ],
        "typography": "N/A",
        "layout": "Depth of field focuses on one prominent sunflower in the foreground while the rest blur into a sea of yellow.",
        "spacing": "Crowded but joyful, bursting with vibrant color.",
        "standoutDetails": "The glowing, backlit petals illuminated by the golden hour sun."
      },
      "readyToUsePrompt": "A vibrant field of blooming sunflowers at sunset. Warm, golden hour light backlighting the yellow petals, making them glow. Shallow depth of field focusing on one perfect sunflower in the foreground, with a blurred sea of yellow in the background. Joyful, nature photography, highly detailed."
    }
  },
  {
    "id": "nat12",
    "url": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800",
    "title": "Lush Mossy Forest Floor",
    "analysis": {
      "styleSummary": "A highly detailed shot of a forest floor covered in vibrant green moss and small ferns. It highlights the micro-ecosystems and rich textures of old-growth forests.",
      "designKeywords": [
        "Moss",
        "Forest Floor",
        "Ferns",
        "Green",
        "Textured",
        "Micro-ecosystem",
        "Earthy"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Vibrant Moss",
            "hex": "#556B2F"
          },
          {
            "name": "Fern Green",
            "hex": "#228B22"
          },
          {
            "name": "Soil Brown",
            "hex": "#3E2723"
          },
          {
            "name": "Shadow Black",
            "hex": "#111111"
          }
        ],
        "typography": "N/A",
        "layout": "Low-angle shot looking across the textured carpet of the forest floor.",
        "spacing": "Dense, intricate, and deeply textured.",
        "standoutDetails": "The fuzzy, incredibly detailed texture of the moss catching tiny pockets of light."
      },
      "readyToUsePrompt": "A highly detailed, low-angle photograph of an old-growth forest floor covered in vibrant, thick green moss and small delicate ferns. Earthy browns and deep greens. Rich, fuzzy textures. Soft, diffused lighting filtering through the canopy. Hyper-realistic, macro nature photography, 8k."
    }
  },
  {
    "id": "nat13",
    "url": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80&w=800",
    "title": "Winter Snowy Pines",
    "analysis": {
      "styleSummary": "A stark, minimalist winter landscape of pine trees heavily blanketed in fresh, bright white snow. It evokes cold, silence, and pristine purity.",
      "designKeywords": [
        "Winter",
        "Snow",
        "Pine Trees",
        "Minimalist",
        "Cold",
        "Pristine",
        "White"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Pure Snow",
            "hex": "#FAFAFA"
          },
          {
            "name": "Frost Blue",
            "hex": "#E0FFFF"
          },
          {
            "name": "Dark Pine",
            "hex": "#2F4F4F"
          },
          {
            "name": "Overcast Gray",
            "hex": "#D3D3D3"
          }
        ],
        "typography": "N/A",
        "layout": "High-contrast geometric composition of dark vertical tree trunks against a purely white background.",
        "spacing": "Aesthetic of emptiness and quiet. The snow acts as overwhelming negative space.",
        "standoutDetails": "The heavy clumps of snow bending the branches, creating interesting organic shapes."
      },
      "readyToUsePrompt": "A minimalist winter landscape photograph of pine trees heavily blanketed in fresh, bright white snow. Overcast, flat lighting creating a stark, high-contrast aesthetic between the dark tree trunks and the pure white snow. Cold, silent, peaceful atmosphere, high resolution."
    }
  },
  {
    "id": "nat14",
    "url": "https://images.unsplash.com/photo-1483728642387-6c3ba6c6b870?auto=format&fit=crop&q=80&w=800",
    "title": "Majestic Red Canyons",
    "analysis": {
      "styleSummary": "A sweeping view of vast, layered red rock canyons under a bright blue sky. It communicates geological history, extreme scale, and rugged beauty.",
      "designKeywords": [
        "Canyon",
        "Red Rocks",
        "Geology",
        "Vast",
        "Rugged",
        "Warm Tones",
        "Desert"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Canyon Red",
            "hex": "#CB4154"
          },
          {
            "name": "Sandstone Orange",
            "hex": "#ED9121"
          },
          {
            "name": "Desert Sky",
            "hex": "#00BFFF"
          },
          {
            "name": "Deep Crevice",
            "hex": "#4A0404"
          }
        ],
        "typography": "N/A",
        "layout": "Panoramic layering, showing foreground cliffs dropping into distant, hazy valleys.",
        "spacing": "Immense scale. The layers of rock create distinct horizontal bands.",
        "standoutDetails": "The intricate, weathered striations and textures carved into the canyon walls."
      },
      "readyToUsePrompt": "A sweeping landscape photograph of vast, layered red rock canyons under a bright, clear blue sky. Intricate geological striations in the sandstone. Extreme scale, rugged desert beauty, warm orange and red tones. Wide-angle lens, deep depth of field, National Geographic style."
    }
  },
  {
    "id": "nat15",
    "url": "https://images.unsplash.com/photo-1506744626753-eda8151a74a0?auto=format&fit=crop&q=80&w=800",
    "title": "Dramatic Coastal Cliffs",
    "analysis": {
      "styleSummary": "A dramatic shot of sheer, jagged cliffs dropping straight into a turbulent, moody ocean. It evokes wildness, danger, and the edge of the world.",
      "designKeywords": [
        "Coastal",
        "Cliffs",
        "Ocean",
        "Dramatic",
        "Moody",
        "Wild",
        "Rugged"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Storm Gray",
            "hex": "#708090"
          },
          {
            "name": "Sea Green",
            "hex": "#2E8B57"
          },
          {
            "name": "Granite Gray",
            "hex": "#696969"
          },
          {
            "name": "Foam White",
            "hex": "#F8F8FF"
          }
        ],
        "typography": "N/A",
        "layout": "Diagonal composition following the rugged coastline, splitting land and sea.",
        "spacing": "Tense and dynamic. The sheer drop creates a sense of vertigo.",
        "standoutDetails": "The crashing waves turning into white foam against the unyielding dark rocks."
      },
      "readyToUsePrompt": "A dramatic coastal landscape photograph of sheer, jagged granite cliffs dropping straight into a turbulent, dark green ocean. Crashing waves turning into white foam. Moody, overcast sky. Rugged, wild, edge-of-the-world atmosphere. Shot with a drone, cinematic lighting, 8k."
    }
  },
  {
    "id": "nat16",
    "url": "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&q=80&w=800",
    "title": "Northern Lights over Ice",
    "analysis": {
      "styleSummary": "A mesmerizing night sky glowing with vibrant green Aurora Borealis over a frozen, icy landscape. It communicates magic, otherworldly beauty, and extreme cold.",
      "designKeywords": [
        "Aurora",
        "Northern Lights",
        "Night Sky",
        "Ice",
        "Magical",
        "Glowing",
        "Green"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Aurora Green",
            "hex": "#39FF14"
          },
          {
            "name": "Night Sky Blue",
            "hex": "#0B0B45"
          },
          {
            "name": "Ice Blue",
            "hex": "#AFEEEE"
          },
          {
            "name": "Starlight White",
            "hex": "#FFFFFF"
          }
        ],
        "typography": "N/A",
        "layout": "Sky-heavy composition, letting the swirling ribbons of light dominate the frame.",
        "spacing": "Cosmic and infinite.",
        "standoutDetails": "The reflection of the vibrant green sky onto the glossy, cracked ice below."
      },
      "readyToUsePrompt": "A mesmerizing astrophotography shot of the Aurora Borealis (Northern Lights) glowing with vibrant neon greens and purples in a pitch-black night sky. Below, a frozen landscape of cracked ice reflecting the glowing sky. Magical, otherworldly, long exposure, hyper-detailed."
    }
  },
  {
    "id": "nat17",
    "url": "https://images.unsplash.com/photo-1444464666168-49b626f11c0e?auto=format&fit=crop&q=80&w=800",
    "title": "Close-up of a Butterfly",
    "analysis": {
      "styleSummary": "A stunning macro shot of a brightly colored butterfly resting on a flower. It highlights delicate details, vibrant symmetry, and the fragility of life.",
      "designKeywords": [
        "Butterfly",
        "Macro",
        "Wildlife",
        "Vibrant",
        "Delicate",
        "Symmetry",
        "Colorful"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Monarch Orange",
            "hex": "#FF4500"
          },
          {
            "name": "Velvet Black",
            "hex": "#0A0A0A"
          },
          {
            "name": "Pollen Yellow",
            "hex": "#FFD700"
          },
          {
            "name": "Soft Green Bokeh",
            "hex": "#9ACD32"
          }
        ],
        "typography": "N/A",
        "layout": "Subject centered, filling the frame with intricate wing patterns.",
        "spacing": "Intimate. The background is completely blurred out into soft colors (bokeh).",
        "standoutDetails": "The powdery, scale-like texture visible on the butterfly's wings."
      },
      "readyToUsePrompt": "A stunning macro wildlife photograph of a brightly colored Monarch butterfly resting delicately on a yellow flower. Incredibly sharp focus revealing the powdery texture and symmetrical patterns of the wings. Soft, creamy green bokeh background. Vibrant, beautiful, 8k resolution."
    }
  },
  {
    "id": "nat18",
    "url": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800",
    "title": "Foggy Pine Forest Aerial",
    "analysis": {
      "styleSummary": "A top-down aerial (drone) view of a dense pine forest with thick pockets of fog weaving through the trees. It creates a highly textured, moody, and abstract pattern.",
      "designKeywords": [
        "Aerial",
        "Drone",
        "Forest",
        "Fog",
        "Texture",
        "Moody",
        "Pattern"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Evergreen",
            "hex": "#2E4A35"
          },
          {
            "name": "Mist White",
            "hex": "#E8ECEF"
          },
          {
            "name": "Deep Shadow",
            "hex": "#1A2421"
          },
          {
            "name": "Pale Gray",
            "hex": "#BFC9CA"
          }
        ],
        "typography": "N/A",
        "layout": "Abstract, borderless texture. No horizon line, just a continuous pattern of treetops.",
        "spacing": "Dense, but visually broken up by the soft, flowing rivers of fog.",
        "standoutDetails": "The contrast between the sharp, spiky treetops and the smooth, cloud-like fog."
      },
      "readyToUsePrompt": "A top-down aerial drone photograph of a dense evergreen pine forest. Thick, moody white fog weaves through the spiky treetops like a river. Highly textured, abstract nature pattern. Deep greens and cool grays. Cinematic, mysterious atmosphere, highly detailed."
    }
  },
  {
    "id": "nat19",
    "url": "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?auto=format&fit=crop&q=80&w=800",
    "title": "Sunlit Tropical Leaf",
    "analysis": {
      "styleSummary": "A bright, graphic close-up of a large Monstera or palm leaf backlit by strong sunlight. It highlights geometric organic shapes, vivid greens, and summer vibes.",
      "designKeywords": [
        "Leaf",
        "Tropical",
        "Backlit",
        "Vivid Green",
        "Graphic",
        "Summer",
        "Organic Shapes"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Translucent Green",
            "hex": "#7CFC00"
          },
          {
            "name": "Deep Vein",
            "hex": "#006400"
          },
          {
            "name": "Sunlight Yellow",
            "hex": "#FFFFE0"
          },
          {
            "name": "Shadow Green",
            "hex": "#228B22"
          }
        ],
        "typography": "N/A",
        "layout": "Cropped tightly to turn the leaf into an abstract pattern of lines and holes.",
        "spacing": "Graphic and punchy, filling the frame with saturated color.",
        "standoutDetails": "The translucency of the leaf glowing under the intense backlight, revealing internal veins."
      },
      "readyToUsePrompt": "A bright, graphic close-up photograph of a large tropical Monstera leaf backlit by strong sunlight. The light shines through the leaf, making it glow with translucent, vivid greens and revealing the intricate vein structures. Crisp, sharp, highly saturated, summer aesthetic, 8k."
    }
  },
  {
    "id": "nat20",
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    "title": "Starry Night Sky over Mountains",
    "analysis": {
      "styleSummary": "A spectacular long-exposure shot of the Milky Way galaxy stretching over a dark, silhouetted mountain range. It communicates infinity, wonder, and the beauty of the cosmos.",
      "designKeywords": [
        "Astrophotography",
        "Milky Way",
        "Stars",
        "Night Sky",
        "Mountains",
        "Cosmic",
        "Wonder"
      ],
      "keyElements": {
        "colorPalette": [
          {
            "name": "Space Violet",
            "hex": "#4B0082"
          },
          {
            "name": "Starry White",
            "hex": "#FFFFA6"
          },
          {
            "name": "Deep Space Blue",
            "hex": "#000033"
          },
          {
            "name": "Silhouette Black",
            "hex": "#050505"
          }
        ],
        "typography": "N/A",
        "layout": "Vast sky dominating the upper 80% of the image, anchored by a thin strip of black mountains at the bottom.",
        "spacing": "Infinite. The dense cluster of stars creates a glowing texture across the sky.",
        "standoutDetails": "The glowing, dusty purple and blue clouds of the Milky Way core."
      },
      "readyToUsePrompt": "A spectacular astrophotography landscape of the Milky Way galaxy stretching across a pitch-black night sky. Glowing dusty clouds of space violet and deep blue, packed with millions of bright stars. A sharp, pitch-black silhouette of a mountain range at the bottom. Long exposure, cosmic, hyper-detailed, 8k."
    }
  }
]