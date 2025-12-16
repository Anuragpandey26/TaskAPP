module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tasks', [
      {
        title: 'Complete project documentation',
        description: 'Write comprehensive documentation for the task management API',
        status: 'in-progress',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fix login bug',
        description: 'Resolve the authentication issue reported by users',
        status: 'pending',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Update database schema',
        description: 'Add new fields to the tasks table',
        status: 'completed',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Design new UI mockups',
        description: 'Create mockups for the dashboard redesign',
        status: 'pending',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Review pull requests',
        description: 'Review and merge pending pull requests',
        status: 'in-progress',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Setup CI/CD pipeline',
        description: 'Configure automated testing and deployment',
        status: 'pending',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Write unit tests',
        description: 'Add test coverage for authentication module',
        status: 'completed',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Optimize database queries',
        description: 'Improve performance of slow queries',
        status: 'in-progress',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
