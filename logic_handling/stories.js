document.addEventListener('DOMContentLoaded', function() {
    // Story Modal
    const shareStoryBtn = document.getElementById('share-story-btn');
    const storyModal = document.getElementById('story-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (shareStoryBtn && storyModal) {
        shareStoryBtn.addEventListener('click', function() {
            storyModal.classList.add('show');
            storyModal.style.display = 'flex';
        });
        
        closeModal.addEventListener('click', function() {
            storyModal.classList.remove('show');
            setTimeout(() => {
                storyModal.style.display = 'none';
            }, 300);
        });
        
        window.addEventListener('click', function(e) {
            if (e.target === storyModal) {
                storyModal.classList.remove('show');
                setTimeout(() => {
                    storyModal.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Story Form Submission
    const storyForm = document.getElementById('story-form');
    if (storyForm) {
        storyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('story-title').value;
            const author = document.getElementById('story-author').value || 'Anonymous';
            const category = document.getElementById('story-category').value;
            const content = document.getElementById('story-content').value;
            
            // In a real app, you would send this data to a server
            console.log('Story submitted:', { title, author, category, content });
            
            alert('Thank you for sharing your story! Our team will review it before publishing.');
            storyForm.reset();
            storyModal.classList.remove('show');
            setTimeout(() => {
                storyModal.style.display = 'none';
            }, 300);
        });
    }
    
    // Story Filtering
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            const selectedCategory = this.value;
            const storyCards = document.querySelectorAll('.story-card');
            
            storyCards.forEach(card => {
                if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});