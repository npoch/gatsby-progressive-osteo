const path = require('path');

async function turnInstructorsIntoPages({ graphql, actions }) {
  // 1. Get template for Instructor
  const instructorTemplate = path.resolve('./src/templates/Instructor.js');

  // 2. Get all instructors from Sanity API
  const { data } = await graphql(`
    query {
      instructors: allSanityInstructor {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each instructor and create a page for that person
  // console.log(data.instructors.nodes);
  data.instructors.nodes.forEach((instructor) => {
    console.log(`Making page for ${instructor.name}`);
    actions.createPage({
      // What is the URL for this new page??
      path: `instructor/${instructor.slug.current}`,
      component: instructorTemplate,
      context: {
        slug: instructor.slug.current,
      },
    })
  });
}

async function turnPostsIntoPages({ graphql, actions }) {
  // 1. Get template for Instructor
  const postTemplate = path.resolve('./src/templates/Post.js');

  // 2. Get all instructors from Sanity API
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each instructor and create a page for that person
  // console.log(data.instructors.nodes);
  data.posts.nodes.forEach((post) => {
    console.log(`Making page for ${post.title}`);
    actions.createPage({
      // What is the URL for this new page??
      path: `blog/${post.slug.current}`,
      component: postTemplate,
      context: {
        slug: post.slug.current,
      },
    })
  });
}

async function turnFaqsIntoPages({ graphql, actions }) {
  // 1. Get template
  const faqTemplate = path.resolve('./src/templates/Faq.js');
  
  // 2. Get all FAQs from Sanity API
  const { data } = await graphql(`
    query {
      faqs: allSanityFaq {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
    `)
  // 3. Loop over each FAQ and create a page for that FAQ
  // console.log(data.faqs.nodes);
  data.faqs.nodes.forEach((faq) => {
    console.log(`Making page for ${faq.title}`);
    actions.createPage({
      // What is the URL for this new page?
      path: `faq/${faq.slug.current}`,
      component: faqTemplate,
      context: {
        slug: faq.slug.current,
      }
    })
  })
}

async function turnEventsIntoPages({ graphql, actions }) {
  // 1. Get template for Instructor
  const eventTemplate = path.resolve('./src/templates/Event.js');

  // 2. Get all instructors from Sanity API
  const { data } = await graphql(`
    query {
      events: allSanityEvent {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each instructor and create a page for that person
  console.log('events', JSON.stringify(data.events.nodes, null, 2));
  data.events.nodes.forEach((event) => {
    console.log(`Making page for ${event.title}`);
    actions.createPage({
      // What is the URL for this new page??
      path: `event/${event.slug.current}`,
      component: eventTemplate,
      context: {
        slug: event.slug.current,
      },
    })
  });

}

async function turnAnnouncementsIntoPages({ graphql, actions }) {
  // 1. Get template for Instructor
  const announcementTemplate = path.resolve('./src/templates/Announcement.js');

  // 2. Get all instructors from Sanity API
  const { data } = await graphql(`
    query {
      announcements: allSanityAnnouncement {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each instructor and create a page for that person
  // console.log(data.instructors.nodes);
  data.announcements.nodes.forEach((announcement) => {
    console.log(`Making page for ${announcement.title}`);
    actions.createPage({
      // What is the URL for this new page??
      path: `announcement/${announcement.slug.current}`,
      component: announcementTemplate,
      context: {
        slug: announcement.slug.current,
      },
    })
  });
}

exports.createPages = async (params) => {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    // Instructors
    turnInstructorsIntoPages(params),

    // Posts
    turnPostsIntoPages(params),

    // FAQs
    turnFaqsIntoPages(params),

    // Events
    turnEventsIntoPages(params),
    
    
    // Announcements
    turnAnnouncementsIntoPages(params),

  ]);
};