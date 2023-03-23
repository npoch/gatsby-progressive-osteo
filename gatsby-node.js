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
  `);
  // 3. Loop over each FAQ and create a page for that FAQ
  console.log(data.faqs.nodes);
  data.faqs.nodes.forEach((faq) => {
    actions.createPage({
      // What is the URL for this new page?
      path: `faq/${faq.slug.current}`,
      component: faqTemplate,
      context: {
        slug: faq.slug.current,
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
    turnFaqsIntoPages(params),

    // Events

    // Announcements

  ]);
}