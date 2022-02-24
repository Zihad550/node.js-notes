## about event

- first register

```

// register a listener for bellRing event
emitter.on('bellRing', (period) => {
    console.log('We need to run', period);
});

// raise an event

```

- when called then the registered thing will be declared

```

// emitter.emit('bellRing', 'second period ended');
// you can also pass multiple parameters
// but the best practice is to pass them into an object

setTimeout(() => {
   emitter.emit('bellRing', 'second period ended');
}, 2000);

```
