async function getPostsByUserId(userId) {
    const post = document.getElementById("postData");
    const loader = document.getElementById("loader");

    if (post) {
        loader.style.display = "block";

        try {
            const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            if (postResponse.ok) {
                const userPosts = await postResponse.json();

                const tableRows = userPosts.map((post) => {
                    return `<tr>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                        <td>${post.body}</td>
                        <td>
                            <button type="button" class="btn btn-secondary" onclick="seeComment(${post.id})">See Comment</button>
                        </td>
                    </tr>`;
                });

                post.innerHTML = tableRows.join("");
            } else {
                console.error("Failed to fetch user posts. Status: " + postResponse.status);
            }
        } catch (error) {
            console.error("An error occurred while fetching or displaying user posts:", error);
        } finally {
            loader.style.display = "none"; // Hide the loader when done
        }
    } else {
        console.error("Element with id 'postData' not found.");
    }
}

// Extract the user ID from the query parameter
const urlParams = new URLSearchParams(location.search);
const userId = urlParams.get("id");

getPostsByUserId(userId);

function seeComment(postId) {
    location.href = `comment.html?id=${postId}`;
}
