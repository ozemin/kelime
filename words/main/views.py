from django.shortcuts import render
from .models import Word
import random
import pandas as pd
from django.http import JsonResponse


def words():
    words = Word.objects.all()
    df = pd.DataFrame(list(words.values()))

    df['length'] = [len(word) for word in df['word']]

    #random select of 10 words every length of twice
    df = df.groupby('length').apply(lambda x: x.sample(2)).reset_index(drop=True)

    return df




def home(request):
    df = words()
    data = df.to_dict('records')

    return render(request, 'main/home.html', {'data': data})





