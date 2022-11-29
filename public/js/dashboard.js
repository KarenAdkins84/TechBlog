const newFormHandler = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#blog-name').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
    
    if (name && description) {
        const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
            'Content-Type': 'application/json',
        },
        });
        
        if (response.ok) {
        document.location.replace('/');
        } else {
        alert('Failed to post new blog!');
        }
    }
    };
    
    document
        .querySelector('.postBtn')
        .addEventListener('click', newFormHandler);