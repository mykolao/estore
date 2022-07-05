import { AppComponent } from 'layouts/App/App.component';
import { withAppStore } from 'store/app';

export const App = withAppStore(AppComponent);
