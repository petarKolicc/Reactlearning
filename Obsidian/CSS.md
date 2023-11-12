
import './Komponenta1.css'

### Obicno stilizovanje
```

<div className="ime_klase"></div>
</div>

// className - mora u jsx, inace je class
```


### Dinamicko stilizovanje
```

<div className={ isSelected ?  "ime_klase" : ""}></div>
// isSelected je preko stanja dobijen, tacnije ne mora da je dobijen ali mora neki isState
// da dinamicki ponovo ucitava ceo html
```
