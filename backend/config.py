from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    qdrant_url: str
    qdrant_api_key: str = ""
    qdrant_collection: str = "sat_tutor"
    embed_model: str = "BAAI/bge-small-en-v1.5"
    chunk_size: int = 512
    chunk_overlap: int = 64
    top_k: int = 5
    langfuse_secret_key: str = ""
    langfuse_public_key: str = ""
    langfuse_host: str = "https://cloud.langfuse.com"

    model_config = SettingsConfigDict(env_file=".env")

settings = Settings()