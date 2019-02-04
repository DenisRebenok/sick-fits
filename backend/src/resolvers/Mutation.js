const Mutation = {
  createDog(parent, args, ctx, info) {
    global.dogs = global.dogs || [];
    // create a Dog
    const newDog = { name: args.name };
    global.dogs.push(newDog);
    return newDog;
  },
};

module.exports = Mutation;
