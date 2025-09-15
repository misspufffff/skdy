// Image gallery data
const images = [
    'yolo.png',
    'toy.png',
    'chill.png',
    'fairy.png',
    'party.png',
    'loser.png',
    'steez.png',
    'punk.png',
    'form.png'
];

// Modal images for each dimension (all groups now use their respective skdy folders)
const modalImages = [
    // YOLO dimension uses skdy-yolo images + marker image
    [
        'yolo.png', // Include the marker image
        'skdy-yolo/image 115.png',
        'skdy-yolo/image 129.png',
        'skdy-yolo/image 130.png',
        'skdy-yolo/image 132.png',
        'skdy-yolo/image 133.png',
        'skdy-yolo/image 139.png',
        'skdy-yolo/image 237.png'
    ],
    // TOY dimension uses skdy-toy images + marker image
    [
        'toy.png', // Include the marker image
        'skdy-toy/image 148.png',
        'skdy-toy/image 151.png',
        'skdy-toy/image 152.png',
        'skdy-toy/image 153.png',
        'skdy-toy/image 154.png',
        'skdy-toy/image 156.png',
        'skdy-toy/image 157.png',
        'skdy-toy/image 158.png',
        'skdy-toy/image 159.png'
    ],
    // CHILL dimension uses skdy-chill images + marker image
    [
        'chill.png', // Include the marker image
        'skdy-chill/5b6c5e52531429bd338a340b1de84614.png',
        'skdy-chill/5ba51a9ea12d2cb4f548237d4e6d9677 1.png',
        'skdy-chill/5dd1cc6a9317414ecdfe866805966e8e.png',
        'skdy-chill/9524adaab46cd8939bd55f608bdb4e11.png',
        'skdy-chill/a6321d88625a6e96d76cc91d44b67abb.png',
        'skdy-chill/b02ad686b8aa7cdc5caa6879e7dda9a8.png',
        'skdy-chill/f2bc6fed6e8ec5cb6be370a552e3ffce.png',
        'skdy-chill/f6123ea6c2508deb2cff54066b60554e.png'
    ],
    // FAIRY dimension uses skdy-fairy images + marker image
    [
        'fairy.png', // Include the marker image
        'skdy-fairy/image 102.png',
        'skdy-fairy/image 103.png',
        'skdy-fairy/image 90.png',
        'skdy-fairy/image 91.png',
        'skdy-fairy/image 93.png',
        'skdy-fairy/image 95.png',
        'skdy-fairy/image 96.png',
        'skdy-fairy/image 98.png',
        'skdy-fairy/image 99.png'
    ],
    // PARTY dimension uses skdy-partyrock images + marker image
    [
        'party.png', // Include the marker image
        'skdy-partyrock/1469a48fee71eba16305fa422c5d6250 1.png',
        'skdy-partyrock/2ac936e8d1f8ec38842ba246bac63c15 1.png',
        'skdy-partyrock/dj flapjack spinning his brains out.png',
        'skdy-partyrock/image 66.png',
        'skdy-partyrock/image 70.png',
        'skdy-partyrock/image 71.png',
        'skdy-partyrock/image 72.png',
        'skdy-partyrock/image 80.png'
    ],
    // LOSER dimension uses skdy-loser images + marker image
    [
        'loser.png', // Include the marker image
        'skdy-loser/image 1802.png',
        'skdy-loser/image 218.png',
        'skdy-loser/image 219.png',
        'skdy-loser/image 220.png',
        'skdy-loser/image 221.png',
        'skdy-loser/image 222.png',
        'skdy-loser/image 223.png',
        'skdy-loser/image 224.png'
    ],
    // STEEZ dimension uses skdy-steez images + marker image
    [
        'steez.png', // Include the marker image
        'skdy-steez/image 12.png',
        'skdy-steez/image 13.png',
        'skdy-steez/image 15.png',
        'skdy-steez/image 16.png',
        'skdy-steez/image 17.png',
        'skdy-steez/image 18.png',
        'skdy-steez/image 19.png',
        'skdy-steez/image 20.png',
        'skdy-steez/image 21.png',
        'skdy-steez/image 22.png',
        'skdy-steez/u4157643692_Ultra-durable_portable_speaker_with_skateboard_gr_42209abe-bf1f-4981-a904-793eda7f851c_0 1.png'
    ],
    // PUNK dimension uses skdy-punk images + marker image
    [
        'punk.png', // Include the marker image
        'skdy-punk/image 194.png',
        'skdy-punk/image 196.png',
        'skdy-punk/image 197.png',
        'skdy-punk/image 198.png',
        'skdy-punk/image 199.png',
        'skdy-punk/image 202.png',
        'skdy-punk/image 203.png',
        'skdy-punk/image 204.png'
    ],
    // FORM dimension uses skdy-form images + marker image
    [
        'form.png', // Include the marker image
        'skdy-form/-8 1.png',
        'skdy-form/-9 1.png',
        'skdy-form/020bc80f5de480a32e357d69853e44aa.png',
        'skdy-form/2cab4eb69f63200f67d3a2fd5d3f039e.png',
        'skdy-form/498253347d47064cdc5a3f4da4ad1bb2.png',
        'skdy-form/845f61ee7059f2d0a784e999ed21b1f2.png',
        'skdy-form/8844e3991e897d2ba49b5597ecdac3f8.png',
        'skdy-form/a5bbcb1a0897fcc3ae4b039f89675c06.png',
        'skdy-form/ab95eb7d34ed2cc91cff1d5ee1bd1f7f.png',
        'skdy-form/COBRA BOWL 1.png',
        'skdy-form/Unknown 1.png'
    ]
];

// Dimension names
const dimensionNames = [
    'DIMENSION 420: YOLO',
    'DIMENSION 777: TOYBOX',
    'DIMENSION 001: CHILLER',
    'DIMENSION 1111: CYBERFAIRY',
    'DIMENSION 1738: PARTY ROCK',
    'DIMENSION 69: LOSERDOM',
    'DIMENSION 911: STEEZ',
    'DIMENSION 666: PUNK THORN',
    'DIMENSION 10010: SKULLPTURE'
];

let currentImageIndex = 0;
let currentModalImageIndex = 0;
let currentDimensionIndex = 0;

// DOM elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const imageWeb = document.getElementById('imageWeb');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentImageSpan = document.getElementById('currentImage');
const totalImagesSpan = document.getElementById('totalImages');
const modalNavigation = document.querySelector('.modal-navigation');
const imageCounter = document.querySelector('.image-counter');
const imageNodes = document.querySelectorAll('.image-node');
const connectionLines = document.querySelector('.connection-lines');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    totalImagesSpan.textContent = images.length;
    
    // Add click event listeners to image nodes
    imageNodes.forEach((node, index) => {
        node.addEventListener('click', () => openModal(index));
        
        // Add loading effect
        const img = node.querySelector('img');
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // Preload image for better performance
        const imgPreload = new Image();
        imgPreload.src = img.src;
    });
    
    // Modal event listeners
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'flex') {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    showPreviousImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        }
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    modal.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    modal.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next image
                showNextImage();
            } else {
                // Swipe right - previous image
                showPreviousImage();
            }
        }
    }
    
    // Create connection lines between nodes
    createConnectionLines();
    
    // Add floating animation to nodes
    addFloatingAnimation();
});

function createConnectionLines() {
    const nodePositions = [];
    const containerRect = document.querySelector('.multiverse-container').getBoundingClientRect();
    
    // Get positions of all nodes
    imageNodes.forEach((node, index) => {
        const rect = node.getBoundingClientRect();
        
        const x = ((rect.left + rect.width/2 - containerRect.left) / containerRect.width) * 100;
        const y = ((rect.top + rect.height/2 - containerRect.top) / containerRect.height) * 100;
        
        nodePositions.push({ x, y, index });
    });
    
    // Create a multiverse web pattern - connect each node to multiple others
    // This creates a more interconnected, cosmic web pattern
    
    // First, create connections to nearby nodes (within a certain distance)
    const connections = [];
    nodePositions.forEach((node, index) => {
        nodePositions.forEach((otherNode, otherIndex) => {
            if (index !== otherIndex) {
                // Calculate distance between nodes
                const distance = Math.sqrt(
                    Math.pow(node.x - otherNode.x, 2) + 
                    Math.pow(node.y - otherNode.y, 2)
                );
                
                // Connect nodes that are reasonably close (not too far, not too close)
                if (distance > 15 && distance < 40) {
                    // Add some randomness to avoid too many connections
                    if (Math.random() < 0.4) {
                        connections.push({
                            x1: node.x,
                            y1: node.y,
                            x2: otherNode.x,
                            y2: otherNode.y,
                            opacity: Math.max(0.1, 0.6 - (distance / 100))
                        });
                    }
                }
            }
        });
    });
    
    // Add some strategic long-distance connections for cosmic feel
    const strategicConnections = [
        [0, 4], [1, 6], [2, 7], [3, 8], [4, 8],
        [5, 1], [6, 3], [7, 0], [8, 2]
    ];
    
    strategicConnections.forEach(([from, to]) => {
        if (from < nodePositions.length && to < nodePositions.length) {
            const node1 = nodePositions[from];
            const node2 = nodePositions[to];
            
            connections.push({
                x1: node1.x,
                y1: node1.y,
                x2: node2.x,
                y2: node2.y,
                opacity: 0.3
            });
        }
    });
    
    // Create all lines at once for better performance
    connections.forEach(conn => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', conn.x1);
        line.setAttribute('y1', conn.y1);
        line.setAttribute('x2', conn.x2);
        line.setAttribute('y2', conn.y2);
        line.setAttribute('class', 'connection-line');
        line.style.opacity = conn.opacity;
        
        connectionLines.appendChild(line);
    });
}

function addFloatingAnimation() {
    imageNodes.forEach((node, index) => {
        // Add random floating animation
        const delay = index * 0.5;
        const duration = 6 + Math.random() * 3; // 6-9 seconds (slower)
        
        node.style.animation = `floating ${duration}s ease-in-out infinite`;
        node.style.animationDelay = `${delay}s`;
    });
}

// Add floating keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floating {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-10px) rotate(1deg); }
        50% { transform: translateY(-5px) rotate(0deg); }
        75% { transform: translateY(-15px) rotate(-1deg); }
    }
`;
document.head.appendChild(style);

function openModal(index) {
    currentDimensionIndex = index;
    currentModalImageIndex = 0;
    
    const currentModalImages = modalImages[currentDimensionIndex];
    
    // Set gallery title
    galleryTitle.textContent = dimensionNames[index];
    
    // All groups now use web layout with their respective skdy folders
    // Show web layout for all dimensions
    modalImage.style.display = 'none';
    imageWeb.style.display = 'grid';
    modalNavigation.classList.add('hidden');
    imageCounter.classList.add('hidden');
    
    // Create web of images
    createImageWeb(currentModalImages);
    
    modal.style.display = 'flex';
    modal.classList.add('show');
    
    // Update navigation buttons
    updateNavigationButtons();
}

function closeModal() {
    modal.style.display = 'none';
    modal.classList.remove('show');
    
    // Clear the image web
    imageWeb.innerHTML = '';
}

function createImageWeb(images) {
    // Clear any existing images
    imageWeb.innerHTML = '';
    
    // Create and add each image to the gallery
    images.forEach((imageSrc, index) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Image ${index + 1}`;
        img.loading = 'lazy';
        
        // Add click handler for individual image zoom
        img.addEventListener('click', () => {
            openSingleImageModal(imageSrc, images, index);
        });
        
        // Add hover effects
        img.addEventListener('mouseenter', () => {
            img.style.filter = 'brightness(1.1) contrast(1.1)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.filter = 'brightness(1) contrast(1)';
        });
        
        imageWeb.appendChild(img);
    });
}

function openSingleImageModal(imageSrc, allImages, currentIndex) {
    // Close the web modal
    closeModal();
    
    // Open single image modal with navigation
    modalImage.style.display = 'block';
    imageWeb.style.display = 'none';
    modalNavigation.classList.remove('hidden');
    imageCounter.classList.remove('hidden');
    
    modalImage.src = imageSrc;
    modalImage.alt = `Image ${currentIndex + 1}`;
    
    // Update counter
    currentImageSpan.textContent = currentIndex + 1;
    totalImagesSpan.textContent = allImages.length;
    
    // Set up navigation for this specific image set
    currentModalImageIndex = currentIndex;
    const tempModalImages = allImages;
    
    // Override navigation functions temporarily
    const originalPrev = showPreviousImage;
    const originalNext = showNextImage;
    
    showPreviousImage = function() {
        if (currentModalImageIndex > 0) {
            currentModalImageIndex--;
        } else {
            currentModalImageIndex = tempModalImages.length - 1;
        }
        modalImage.src = tempModalImages[currentModalImageIndex];
        currentImageSpan.textContent = currentModalImageIndex + 1;
    };
    
    showNextImage = function() {
        if (currentModalImageIndex < tempModalImages.length - 1) {
            currentModalImageIndex++;
        } else {
            currentModalImageIndex = 0;
        }
        modalImage.src = tempModalImages[currentModalImageIndex];
        currentImageSpan.textContent = currentModalImageIndex + 1;
    };
    
    modal.style.display = 'flex';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Restore original functions when modal closes
    const restoreFunctions = () => {
        showPreviousImage = originalPrev;
        showNextImage = originalNext;
    };
    
    closeBtn.addEventListener('click', restoreFunctions, { once: true });
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            restoreFunctions();
        }
    }, { once: true });
}

function showPreviousImage() {
    const currentModalImages = modalImages[currentDimensionIndex];
    if (currentModalImageIndex > 0) {
        currentModalImageIndex--;
    } else {
        currentModalImageIndex = currentModalImages.length - 1; // Loop to last image
    }
    updateModalImage();
}

function showNextImage() {
    const currentModalImages = modalImages[currentDimensionIndex];
    if (currentModalImageIndex < currentModalImages.length - 1) {
        currentModalImageIndex++;
    } else {
        currentModalImageIndex = 0; // Loop to first image
    }
    updateModalImage();
}

function updateModalImage() {
    const currentModalImages = modalImages[currentDimensionIndex];
    modalImage.src = currentModalImages[currentModalImageIndex];
    modalImage.alt = dimensionNames[currentDimensionIndex];
    currentImageSpan.textContent = currentModalImageIndex + 1;
    totalImagesSpan.textContent = currentModalImages.length;
    updateNavigationButtons();
    
    // Add a subtle animation effect
    modalImage.style.opacity = '0';
    setTimeout(() => {
        modalImage.style.opacity = '1';
    }, 100);
}

function updateNavigationButtons() {
    // Enable/disable navigation buttons based on current position
    // For circular navigation, we always enable both buttons
    prevBtn.disabled = false;
    nextBtn.disabled = false;
}

// Preload images for better performance
function preloadImages() {
    // Preload marker images
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Preload modal images
    modalImages.forEach(dimensionImages => {
        dimensionImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    });
}

// Start preloading when page loads
window.addEventListener('load', preloadImages);

// Add hover effects to nodes
imageNodes.forEach(node => {
    node.addEventListener('mouseenter', function() {
        // Highlight connected nodes
        const nodeIndex = Array.from(imageNodes).indexOf(this);
        highlightConnectedNodes(nodeIndex);
    });
    
    node.addEventListener('mouseleave', function() {
        // Remove highlights
        removeHighlights();
    });
});

function highlightConnectedNodes(nodeIndex) {
    // Add glow effect to the hovered node
    imageNodes[nodeIndex].style.filter = 'drop-shadow(0 0 20px #00ff88)';
    
    // Add subtle glow to all other nodes
    imageNodes.forEach((node, index) => {
        if (index !== nodeIndex) {
            node.style.filter = 'drop-shadow(0 0 10px rgba(0, 255, 136, 0.3))';
        }
    });
}

function removeHighlights() {
    imageNodes.forEach(node => {
        node.style.filter = 'none';
    });
}

// Add parallax effect to background on mouse move (throttled for performance)
let mouseMoveTimeout;
document.addEventListener('mousemove', function(e) {
    if (mouseMoveTimeout) return;
    
    mouseMoveTimeout = setTimeout(() => {
        const container = document.querySelector('.multiverse-container');
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        container.style.backgroundPosition = `${x}% ${y}%`;
        mouseMoveTimeout = null;
    }, 16); // ~60fps
});

// Add cosmic particle effects (minimal for clean look)
function createCosmicParticles() {
    const container = document.querySelector('.multiverse-container');
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < 5; i++) { // Further reduced to 5 particles
        const particle = document.createElement('div');
        particle.className = 'cosmic-particle';
        particle.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${4 + Math.random() * 6}s linear infinite;
            opacity: ${0.2 + Math.random() * 0.3};
        `;
        fragment.appendChild(particle);
    }
    container.appendChild(fragment);
}

// Add particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px); opacity: 0; }
    }
`;
document.head.appendChild(particleStyle);

// Initialize cosmic particles
setTimeout(createCosmicParticles, 1000);

// Typewriter effect for "EVERYTHING IS CONNECTED"
function startTypewriterEffect() {
    const text = "EVERYTHING IS CONNECTED";
    const typewriterElement = document.getElementById('typewriter-text');
    const connectedTextContainer = document.querySelector('.connected-text');
    let index = 0;
    
    function typeNextLetter() {
        if (index < text.length) {
            typewriterElement.textContent += text[index];
            index++;
            setTimeout(typeNextLetter, 100); // 100ms delay between letters
        } else {
            // Typing complete - add glow animation and keep cursor blinking
            connectedTextContainer.classList.add('typing-complete');
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeNextLetter, 1500);
}

// Quiz data
const quizQuestions = [
    {
        question: "What's your ideal way to spend a Friday night?",
        options: [
            { text: "Skating through the city streets", dimension: "yolo" },
            { text: "Building something cool with friends", dimension: "toy" },
            { text: "Chilling with music and art", dimension: "chill" },
            { text: "Exploring mystical and magical places", dimension: "fairy" },
            { text: "Partying and dancing all night", dimension: "party" },
            { text: "Hanging out in underground spots", dimension: "loser" },
            { text: "Perfecting your style and skills", dimension: "steez" },
            { text: "Rebelling against the system", dimension: "punk" },
            { text: "Creating abstract art and forms", dimension: "form" }
        ]
    },
    {
        question: "What music gets you most hyped?",
        options: [
            { text: "High-energy electronic beats", dimension: "yolo" },
            { text: "Fun, playful pop songs", dimension: "toy" },
            { text: "Chill ambient and indie", dimension: "chill" },
            { text: "Ethereal and dreamy sounds", dimension: "fairy" },
            { text: "Bass-heavy party tracks", dimension: "party" },
            { text: "Raw, underground vibes", dimension: "loser" },
            { text: "Smooth, stylish hip-hop", dimension: "steez" },
            { text: "Aggressive punk and metal", dimension: "punk" },
            { text: "Experimental and avant-garde", dimension: "form" }
        ]
    },
    {
        question: "What's your dream aesthetic?",
        options: [
            { text: "Bright neon and futuristic", dimension: "yolo" },
            { text: "Colorful and playful", dimension: "toy" },
            { text: "Minimalist and clean", dimension: "chill" },
            { text: "Mystical and ethereal", dimension: "fairy" },
            { text: "Vibrant and energetic", dimension: "party" },
            { text: "Gritty and authentic", dimension: "loser" },
            { text: "Sleek and sophisticated", dimension: "steez" },
            { text: "Dark and rebellious", dimension: "punk" },
            { text: "Abstract and artistic", dimension: "form" }
        ]
    },
    {
        question: "What motivates you most?",
        options: [
            { text: "Living life to the fullest", dimension: "yolo" },
            { text: "Having fun and being creative", dimension: "toy" },
            { text: "Finding peace and balance", dimension: "chill" },
            { text: "Exploring the unknown", dimension: "fairy" },
            { text: "Bringing people together", dimension: "party" },
            { text: "Staying true to yourself", dimension: "loser" },
            { text: "Perfecting your craft", dimension: "steez" },
            { text: "Fighting for change", dimension: "punk" },
            { text: "Creating something unique", dimension: "form" }
        ]
    },
    {
        question: "What's your ideal environment?",
        options: [
            { text: "Urban streets and skate parks", dimension: "yolo" },
            { text: "Playgrounds and creative spaces", dimension: "toy" },
            { text: "Quiet studios and nature", dimension: "chill" },
            { text: "Mystical forests and gardens", dimension: "fairy" },
            { text: "Clubs and party venues", dimension: "party" },
            { text: "Underground spots and alleys", dimension: "loser" },
            { text: "High-end boutiques and galleries", dimension: "steez" },
            { text: "Punk venues and protests", dimension: "punk" },
            { text: "Art galleries and museums", dimension: "form" }
        ]
    }
];

const dimensionResults = {
    yolo: {
        title: "DIMENSION 420: YOLO",
        description: "You're all about living life to the fullest! You embrace adventure, take risks, and make the most of every moment. Your energy is infectious and you inspire others to break free from their comfort zones."
    },
    toy: {
        title: "DIMENSION 777: TOYBOX",
        description: "You're playful, creative, and full of wonder! You see the world through curious eyes and love to build, create, and explore new possibilities. Your imagination knows no bounds."
    },
    chill: {
        title: "DIMENSION 001: CHILLER",
        description: "You're calm, collected, and zen. You find beauty in simplicity and prefer a laid-back approach to life. You're the person everyone goes to for peace and perspective."
    },
    fairy: {
        title: "DIMENSION 1111: CYBERFAIRY",
        description: "You're mystical, ethereal, and connected to the magical side of life. You see beauty in the unseen and have a deep connection to nature and the spiritual realm."
    },
    party: {
        title: "DIMENSION 1738: PARTY ROCK",
        description: "You're the life of the party! You love bringing people together, creating energy, and making sure everyone has a good time. Your positive vibes are contagious."
    },
    loser: {
        title: "DIMENSION 69: LOSERDOM",
        description: "You're authentic, real, and unapologetically yourself. You don't follow trends or care about fitting in - you march to your own beat and inspire others to do the same."
    },
    steez: {
        title: "DIMENSION 911: STEEZ",
        description: "You're stylish, confident, and always on point. You have an eye for aesthetics and quality, and you're always looking to perfect your craft and elevate your game."
    },
    punk: {
        title: "DIMENSION 666: PUNK THORN",
        description: "You're rebellious, passionate, and fight for what you believe in. You challenge the status quo and aren't afraid to speak your mind. Your authenticity is your superpower."
    },
    form: {
        title: "DIMENSION 10010: SKULLPTURE",
        description: "You're artistic, abstract, and see the world in unique ways. You're drawn to form, structure, and the beauty of design. You create art that makes people think and feel."
    }
};

// Quiz state
let currentQuizQuestion = 0;
let quizAnswers = {};
let quizModal, discoverBtn, quizClose, questionText, optionsContainer, resultContainer, resultTitle, resultDescription, exploreBtn, currentQuestionSpan, totalQuestionsSpan;
let timewarpModal, galleryTitle, progressFill, progressDots;

// Quiz functions
function initializeQuiz() {
    quizModal = document.getElementById('quizModal');
    discoverBtn = document.getElementById('discoverBtn');
    quizClose = document.getElementById('quizClose');
    questionText = document.getElementById('questionText');
    optionsContainer = document.getElementById('optionsContainer');
    resultContainer = document.getElementById('resultContainer');
    resultTitle = document.getElementById('resultTitle');
    resultDescription = document.getElementById('resultDescription');
    exploreBtn = document.getElementById('exploreDimension');
    currentQuestionSpan = document.getElementById('currentQuestion');
    totalQuestionsSpan = document.getElementById('totalQuestions');
    timewarpModal = document.getElementById('timewarpModal');
    galleryTitle = document.getElementById('galleryTitle');
    progressFill = document.getElementById('progressFill');
    progressDots = document.querySelectorAll('.progress-dot');
    
    // Set total questions
    totalQuestionsSpan.textContent = quizQuestions.length;
    
    // Event listeners
    discoverBtn.addEventListener('click', startQuiz);
    quizClose.addEventListener('click', closeQuiz);
    exploreBtn.addEventListener('click', exploreResultDimension);
    
    // Close quiz when clicking outside
    quizModal.addEventListener('click', function(e) {
        if (e.target === quizModal) {
            closeQuiz();
        }
    });
}

function startQuiz() {
    currentQuizQuestion = 0;
    quizAnswers = {};
    showQuestion();
    quizModal.style.display = 'flex';
}

function showQuestion() {
    const question = quizQuestions[currentQuizQuestion];
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuizQuestion + 1;
    
    // Update progress bar
    const progressPercentage = ((currentQuizQuestion + 1) / quizQuestions.length) * 100;
    progressFill.style.width = progressPercentage + '%';
    
    // Update progress dots
    progressDots.forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index < currentQuizQuestion) {
            dot.classList.add('completed');
        } else if (index === currentQuizQuestion) {
            dot.classList.add('active');
        }
    });
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option buttons
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'quiz-option';
        optionBtn.textContent = option.text;
        optionBtn.addEventListener('click', () => selectOption(option.dimension));
        optionsContainer.appendChild(optionBtn);
    });
    
    // Show question container, hide result
    document.getElementById('questionContainer').style.display = 'block';
    resultContainer.style.display = 'none';
}

function selectOption(dimension) {
    quizAnswers[currentQuizQuestion] = dimension;
    
    if (currentQuizQuestion < quizQuestions.length - 1) {
        currentQuizQuestion++;
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    // Calculate most frequent dimension
    const dimensionCounts = {};
    Object.values(quizAnswers).forEach(dimension => {
        dimensionCounts[dimension] = (dimensionCounts[dimension] || 0) + 1;
    });
    
    const resultDimension = Object.keys(dimensionCounts).reduce((a, b) => 
        dimensionCounts[a] > dimensionCounts[b] ? a : b
    );
    
    const result = dimensionResults[resultDimension];
    resultTitle.textContent = result.title;
    resultDescription.textContent = result.description;
    
    // Store result for explore button
    exploreBtn.dataset.dimension = resultDimension;
    
    // Show result container, hide question
    document.getElementById('questionContainer').style.display = 'none';
    resultContainer.style.display = 'block';
}

function exploreResultDimension() {
    const dimension = exploreBtn.dataset.dimension;
    const dimensionIndex = images.indexOf(dimension + '.png');
    
    closeQuiz();
    
    if (dimensionIndex !== -1) {
        // Start timewarp animation
        startTimewarpAnimation(() => {
            openModal(dimensionIndex);
        });
    }
}

function closeQuiz() {
    quizModal.style.display = 'none';
}

// Timewarp animation functions
function startTimewarpAnimation(callback) {
    timewarpModal.style.display = 'flex';
    createTimewarpParticles();
    
    // Run animation for 3 seconds then call callback
    setTimeout(() => {
        timewarpModal.style.display = 'none';
        if (callback) callback();
    }, 3000);
}

function createTimewarpParticles() {
    const particlesContainer = timewarpModal.querySelector('.timewarp-particles');
    particlesContainer.innerHTML = '';
    
    // Create multiple particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'timewarp-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.setProperty('--random-x', (Math.random() - 0.5) * 200 + 'px');
        particlesContainer.appendChild(particle);
    }
}

// Start typewriter effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    startTypewriterEffect();
    initializeQuiz();
});