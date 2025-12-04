from prolog_interface import InabelPrologInterface

if __name__ == "__main__":
    api = InabelPrologInterface("../inabel.ai.pl")
    names = api.get_all_pattern_names()
    print("Total patterns:", len(names))
    print("First 3:", names[:3])
