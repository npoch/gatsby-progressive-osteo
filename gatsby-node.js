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
  console.log(data.instructors.nodes);
  data.instructors.nodes.forEach((instructor) => {
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

exports.createPages = async (params) => {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    // Instructors
    turnInstructorsIntoPages(params),
    // FAQs

    // Events

    // Announcements

  ]);
}