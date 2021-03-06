# AngularRxjs


#Using Observable with AsyncPipe
Angular "AsyncPipe" subscribes to Observable and returns the emitted data. 

    For example:

    Let's suppose we have this method:

        getItems(): Observable<Item[]> {
        this.items$ = this.httpClient.get<Item[]>(this.itemUrl);
        }

        The items$ variable is of type Observable<Item[]>.

        After calling the getItems() method on the component we can use the async pipe in the component template to subscribe to the returned Observable:

        <ul>
            <li *ngFor="let item of items$ | async" >

            </li>
        </ul> 


# Subscribing to Observables
    Observables are used for better support of event handling, asynchronous programming, and handling multiple values. When you define an Observable to publish some values for a consumer, the values are not emitted until you actually subscribe to the Observable.

    The Consumer that subscribes to the Observable keeps receiving values until the Observable is completed or the consumer unsubscribes from the observable.

    Let's start by defining an observable that provides a stream of updates


#Using the map() Operator
    The map() operator is similar to the Array.map() method. It lets you map observable responses to other values. For example:

        import { Observable} from 'rxjs';
        import { map } from 'rxjs/operators';

        getItems(): Observable<Array<any>> {

        return this.aService.getItems()
            .pipe(map(response => response.data));
        } 
        The getItems() method returns an Observable. We're using the map() operator to return the data property of the response object. The operator enables us to map the response of the Observable stream to the data value.

        We import the pipeable operator map() from the rxjs/operators package and we use the pipe() method (which takes a variable number of pipeable operators) to wrap to wrap the operator.