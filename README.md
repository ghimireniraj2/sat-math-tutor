"# sat-math-tutor" 

### SAT Tutor RAG System (Enterprise-Grade AI Learning Assistant)

A Retrieval-Augmented Generation (RAG) system that acts as an intelligent SAT tutor.  
It helps students learn SAT Math, Reading, and Grammar through:

- Concept explanations
- Step-by-step problem solving
- Practice question generation
- Mistake analysis and feedback

This project is designed as a **production-grade AI architecture** that can scale from a local demo to a SaaS-level tutoring platform.

---

###  System Architecture

The system is built using a modular, enterprise-style RAG pipeline:

```text
Frontend (Next.js)
        ↓
FastAPI Backend (RAG Orchestrator)
        ↓
LlamaIndex (RAG Engine)
        ↓
Vector Database (Qdrant)
        ↓
Embedding Model (BGE / E5)
        ↓
Reranker (Cross-Encoder)
        ↓
LLM (Ollama / GPT-4o / Groq)


###  Tech Stack (End-to-End)

# Frontend (UI Layer)
Next.js (React framework)
TailwindCSS (styling)
shadcn/ui (UI components)
Server-Sent Events (streaming responses)
Responsibilities:
Chat interface
Study mode selection (Explain / Practice / Test)
Real-time streaming responses
User interaction layer


# Backend (API Layer)
FastAPI (Python async framework)
Pydantic (validation)
Uvicorn (ASGI server)
Responsibilities:
RAG orchestration API
Query preprocessing
Prompt construction
Response streaming
Context management

# RAG Orchestration Layer

LlamaIndex

Responsibilities:
Document ingestion pipeline
Chunking strategy
Index creation
Query routing
Retrieval orchestration
Optional Extensions:

LangChain

Used for:

tool calling (calculator, quiz generator)
agent workflows
multi-step reasoning pipelines

# Vector Database Layer

Qdrant

Responsibilities:
Store vector embeddings
Semantic similarity search
Metadata filtering (topic, difficulty, type)
High-performance retrieval
Development Alternative:
ChromaDB (local-only prototype mode)

# Embedding Layer
Recommended Models:
BAAI/bge-small-en-v1.5 (fast + strong baseline)
BAAI/bge-base-en-v1.5 (higher accuracy)
intfloat/e5-base-v2 (alternative high-quality embeddings)

Responsibilities:
Convert SAT text → vector representations
Enable semantic search over knowledge base

# LLM Layer

Ollama

Local Models:
Llama 3 (recommended)
Mistral 7B (lightweight & fast)
Cloud Options:
OpenAI GPT-4o / GPT-4.1
Groq API (ultra-low latency inference)
Responsibilities:
Generate explanations
Solve SAT problems step-by-step
Provide tutoring responses
Adapt explanations to difficulty level


## RAG Pipeline Flow
1. User submits question
2. Query is embedded into vector space
3. Qdrant retrieves top-k relevant chunks
4. Metadata filtering applied (topic, difficulty)
5. Cross-encoder reranker reorders results
6. Context is assembled
7. LLM generates final response

Why

Vector search alone is noisy
Reranking improves accuracy significantly
Context filtering reduces hallucinations
Enables tutor-level reasoning quality


### Data Sources

The system uses only free, educational, and safe datasets.

# Primary Sources
SAT sample tests (College Board public materials)
Khan Academy SAT prep content
OpenStax textbooks:
Algebra
Geometry
Statistics

# Supplementary Sources
Wikipedia educational articles
Public SAT question datasets (GitHub repositories)
Educational blog content (open-license or fair use)

# Optional Enhancement
LLM-generated SAT-style questions
Paraphrased explanations for data augmentation


## Data Requirements
# MVP (Working Demo)
20–50 documents
~300–800 chunks
Basic SAT Math + Reading coverage

# Production System
100–300 documents
1,000–5,000 chunks
Full SAT Math + Reading + Grammar coverage

# Scaled System
10,000+ chunks
Multi-exam support (SAT, ACT, GRE, AP)


### Core Features

# SAT Tutor Mode
Step-by-step explanations
Concept breakdowns
Worked examples

# Practice Mode
Generates SAT-style questions
Adaptive difficulty scaling
Similar question generation

# Mistake Analysis Mode
Identifies reasoning errors
Maps mistakes to missing concepts
Suggests targeted practice

# Learning Support
Concept summaries
Formula explanations
Quick revision mode

# Example Queries
“Explain quadratic equations step by step”
“Why is my answer wrong in this SAT problem?”
“Give me a harder version of this question”
“Explain comma rules for SAT grammar”
“What concept do I need to solve this?”
