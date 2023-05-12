from django.db import models

# Create your models here.
class Word(models.Model):
    word = models.CharField(max_length=100)
    definition = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updatedAt = models.DateTimeField(auto_now=True, blank=True, null=True)

    @property
    def length(self):
        return len(self.word)
    

    
    def __str__(self):
        return self.word
    
    class Meta:
        verbose_name_plural = 'words'
        ordering = ['-createdAt']
        db_table = 'Words'