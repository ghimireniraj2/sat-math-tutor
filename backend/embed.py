from sentence_transformers import SentenceTransformer
from config import settings

_model = None

def get_model() -> SentenceTransformer:
    """Lazy load - only initialize once."""
    global _model
    if _model is None:
        _model = SentenceTransformer(settings.embed_model)
    return _model
    
def embed_text(text: str) -> list[float]:
    model = get_model()
    return model.encode(text, normalize_embeddings=True).tolist()

def embed_batch(texts: list[str]) -> list[list[float]]:
    model = get_model()
    return model.encode(texts, normalize_embeddings=True).tolist()


