const newLink = {
    subscribe: (root, args, context, info) => {
        return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node();
    },
    resolve: payload => {
        return payload;
    },
};

const newVote = {
    subscribe: (root, args, context, info) => {
        return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node();
    },
    resolve: payload => {
        return payload;
    },
}

module.exports = {
    newLink,
    newVote,
}
