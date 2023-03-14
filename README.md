# Bullmq

BullMQ is a Node.js library that implements a fast and robust queue system built on 
top of Redis that helps in resolving many modern age micro-services architectures.

The library is designed so that it will fulfill the following goals:
1. Exactly once queue semantics, i.e., attempts to deliver every message exactly one time, but it will deliver at least once in the worst case scenario.
2. Easy to scale horizontally. Add more workers for processing jobs in parallel.
3. Consistent.
4. High performant. Try to get the highest possible throughput from Redis by combining efficient .lua scripts and pipelining.
