---
title: Architecture Without an End State - Intermediate
type: Workshop
greeting: Schedule a Workshop at Your Company
image: /img/workshop/jumbotron.jpg
origin: arch_without_end_state
description: >-
        Learn how to design and architect systems that admit change, bending and
        flexing through time. Apply architecture patterns to real world systems.
        Choose designs that meet your needs. Make trade-offs deliberately and with foresight.
---
# Summary

Learn how to build systems that evolve and flex in small steps over
time. Design software architecture that adapts to stresses from
business and technology change. Stop aiming for the poster on the wall
and forget about the three-year plan to build the "end state."

This intermediate class builds on the topics from [the introductory level](/workshop/arch-without-end-state-intro/).

# Description

Architecture plans in enterprises tend to resemble late-night infomercials. First, you see a person or system that seems incapable of survival—a situation that can be immediately rectified if you just buy into the product. (One popular infomercial shows incompetent people mangling tomatoes transitioning into Ginsu-wielding sous chefs; the architecture pitch starts with hideous complexity then moves to clean orthogonal box diagrams.) Operators are always standing by.

Real architecture never reaches that blissful end state. Something always interrupts the program: businesses change, technology changes, or funding dries up. What would happen if you did reach the end state, anyway? Is IT in the company done? Of course not.

The truth is that there is no end state. We must all learn to build systems that evolve and grow. We need to stop aiming for the end state and understand that change is continuous. We cannot predict the details, but we can learn the general patterns.

Michael Nygard demonstrates how to design and architect systems that admit change—bending and flexing through time. Michael will teach you how to use all the tools at your disposal: technical design, information architecture, infrastructure, and some process change, to transform rigid systems into  maneuverable architecture.

This workshop includes both teaching and hands-on design sessions. Design sessions will be paper and whiteboard work in small groups. You'll work on real problems drawn from a variety of industries. If you’re a developer or architect working with medium to large architectures and building applications in the context of existing systems or transitioning to new systems, this is the tutorial for you.

# Prerequisite knowledge

Either the [the introductory level](/workshop/arch-without-end-state-intro/) or a few years of experience with system architecture. 

Students should be able to draw a System Context Diagram, identify interfaces across boundaries, and know what the [architecture qualities](https://github.com/mtnygard/architecture-qualities) are.

# What you'll learn

* Learn how to design systems that can evolve over time in the face of technological and business change
* Learn about ways to isolate information to allow independent change
* Understand when the "single system of record" pattern applies and when it does not
* Learn how to combine microservices with legacy systems
* Find new ways to separate concerns for better information hiding
* Learn how to build systems in simpler pieces that can be recombined and recomposed to enable new business capabilities, all without running afoul of YAGNI

# Topics Covered

## Application Architecture

* Hexagonal architecture
* Layers
* Abstraction and concretion
* Modules, Deployments, Components
* Event sourcing
* Command-Query Responsibility Separation (CQRS)

## System Design

* Information architecture
* Identifiers and their many challenges
* Microservices
* Message-driven systems
* Microkernels
* Single system of record
* Augment upstream
* Contextualize downstream
* Pluralism
* Open-world systems
* Data/metadata unification
* Rules-based systems
* Generalized minimalism

## Infrastructure and Runtime Platforms

* VMs and Containers
* Microservices
* Service Mesh
* Orchestration