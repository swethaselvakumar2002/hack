import sys
import json

def recommend(progress):
    # Dummy recommendation logic
    recommendations = ["Learn Recursion", "Dynamic Programming"]
    return recommendations

if __name__ == "__main__":
    progress = json.loads(sys.argv[1])
    recommendations = recommend(progress)
    print(json.dumps(recommendations))
