## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/Spideys173269584/spidey173269584.github.io/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Spideys173269584/spidey173269584.github.io/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out."match_parent"
                                                   android:layout_height="match_parent"
                                                   tools:context=".MainActivity">
</androidx.constraintlayout.widget.ConstraintLayout>
<!-- 点击第一行的 androidx ,然后点击小灯泡下的 Convert to data binding layout 这一项，自动转换成以下格式 -->
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        xmlns:tools="http://schemas.android.com/tools">
    <data>
    </data>
    <androidx.constraintlayout.widget.ConstraintLayout
                                      android:layout_width="match_parent"
                                      android:layout_height="match_parent"
                                      tools:context=".MainActivity">
    </androidx.constraintlayout.widget.ConstraintLayout>
</layout>
```

`MainActivity` 的修改

```java
package com.example.jetpacktest;
import androidx.appcompat.app.AppCompatActivity;
import androidx.databinding.DataBindingUtil;
import androidx.lifecycle.ViewModelProvider;
import android.os.Bundle;
import com.example.jetpacktest.databinding.ActivityMainBinding;
public class MainActivity extends AppCompatActivity {
    ActivityMainBinding binding;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // setContentView(R.layout.activity_main);
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main);
    }
}
```

##### `data-binding` 的反向绑定（`ViewModel -> Layout`）

`res/layout/activity_main.xml` 中的使用

```xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        xmlns:tools="http://schemas.android.com/tools">
    <data>
        <import type="类路径" />
        <variable
                  name="变量名"
                  type="数据类型" />
    </data>
    <androidx.constraintlayout.widget.ConstraintLayout
                                      android:layout_width="match_parent"
                                      android:layout_height="match_parent"
                                      tools:context=".MainActivity">
        <View
              android:text="@{伪Java代码}"
              android:onClick="@{()->{Java代码}}" />
        <!-- 在伪java代码中，MutableLiveData泛型类可直接用变量名去获取内部值，无需getValue操作。
若该LiveData是不可见时，会自动调用getXX方法获取。所以使用封装，在这里十分重要。另外，在事件执行代码中，
和JavaScript的处理方式如出一辙，都可以使用lambda表达式去代指一个函数或方法，
或者也可以直接使用已有的函数或方法。 -->
    </androidx.constraintlayout.widget.ConstraintLayout>
</layout>
```

`MainActivity` 的修改

```java
package com.example.jetpacktest;
import androidx.appcompat.app.AppCompatActivity;
import androidx.databinding.DataBindingUtil;
import androidx.lifecycle.ViewModelProvider;
import android.os.Bundle;
import com.example.jetpacktest.databinding.ActivityMainBinding;
public class MainActivity extends AppCompatActivity {
    MyViewModel myViewModel;
    ActivityMainBinding binding;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main);
        myViewModel = new ViewModeProvider(this, new ViewModeProvider.NewInstanceFactory()).get(MyViewModel.class);	// 获取ViewModel实例
        binding.setData(myViewModel);	// 设置layout中data的值，类似于赋值操作
        binding.setLifecycleOwner(this);	// 设置绑定生命周期的实例为当前实例
    }
}
```

##### 不同位置的`data-binding`和`Live-Data`

- 主活动（`MainActivity`）

```java
// 默认版
@Override
protected void onCreate(Bundle savedInstanceState) {
    ViewModel类名 myViewModel = new ViewModelProvider(this, 
        new ViewModelProvider.NewInstanceFactory())
		.get(ViewModel类名.class);
    ActivityMainBinding binding = MainActivityBinding.setContentView(this, 
        R.layout.activity_main);
    binding.set参数名(myVuewModel);
    binding.setLivecycleOwner(this);
}
// SavedStateHandle 参数传递版
@Override
protected void onCreate(Bundle savedInstanceState) {
    ViewModel类名 myViewModel = new ViewModelProvider(this, 
        new SavedStateViewModelFactory(getApplication(), this))
		.get(ViewModel类名.class);
    ActivityMainBinding binding = MainActivityBinding.setContentView(this, 
        R.layout.activity_main);
    binding.set参数名(myVuewModel);
    binding.setLivecycleOwner(this);
}
```

- 分页（Fragment）

```java
@Override
public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
    ViewModel类名 myViewModel = new ViewModelProvider(getActivity())
        .get(ViewModel类名.class);
    Fragment名称Binding binding = DataBindingUtil.inflate(inflater, 
		R.layout.fragment的布局资源id, container, false);
    binding.set参数名(myViewModel);
    binding.setLifecycleOwner(getActivity());
    return binding.getRoot();
}
```





### 五、数据处理

##### 关于临时数据的处理

最经典的就是`MainActivity`的`onSaveInstanceState`方法中`Bundle`类的存储

`onSaveInstanceState`方法与`ViewModel`默认存储的临时数据最大的区别是，前者可以在`Activity`摧毁后依旧保留数据，而后者则不能；临时数据存储，后者较前者更为方便。

除了`onSaveInstanceState`方法以外，还可以使用`JetPack`内置的类`SavedStateHandle`去实现，其内部会自动提供`LiveData`实时数据对象，可供`Observe`监视。

```java
saveStateHandle.getLiveData(key);
saveStateHandle.getLiveData(key, initial);
```

对于永久保存的数据，最好在`MainActivity`中的`onPause`方法里备份数据，不会被跳过，`onDestroy`和`onStop`都有可能会被跳过。

##### 外部使用资源的方式

> 由于`MainActivity `类实现了Context方面的各个方法和接口，所以在主类中无需加任何对象修饰，但在外部则需要引用程序的Context才可用

```java
getApplicationContext().getResource().getString(R.string.*)
```

### 六、 `Navigation` 导航

##### `Fragment` 中的 `Activity`

> 在 `Fragment` 对象中，大部分操作在 `onActivityCreated` 方法中使用，其他方法会导致部分组件对象无法获得等问题。

```java
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
public class MyFragment extends Fragment {
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        // 代码
    }
}
```

##### 页面跳转

```java
// 自定义点击事件跳转
getView().findViewById(R.id.button).setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        NavController controller = Navigation.findNavController(v);
        controller.navigation(R.id.action_aFragment_to_bFragment);
    }
});

// 使用Navigation中内置方法进行跳转
getView().findViewById(R.id.button).setOnClickListener(
    Navigation.createNavigationOnClickListener(R.id.action_aFragment_to_bFragment))
```



##### `NavController` 在 `onCreate` 方法中出现异常的解决方案

> 新版本的API不支持直接在`MainActivity`中的`onCreate`方法里直接获取`NavController`对象

- 老版本

```java
// 直接通过当前的Activity获取NavController对象
NavController navController = Navigation.findNavController(this, 
	R.id.fragmentContainerView);

// 通过View获得NavController对象
FragmentContainerView fragmentContainerView = findViewById(R.id.fragmentContainerView);
NavController navController = Navigation.findNavController(fragmentContainerView);
```

- 解决方案

```java
// 强制转换成NavHostFragment类型，使用其实例方法获得NavController对象
NavController navController = ((NavHostFragment) getSupportFragmentManager()
                               .findFragmentById(R.id.fragmentContainerView))
    .getNavController();

// 使用NavHostFragment类的静态方法获得NavController对象
Fragment fragment = getSupportFragmentManager()
    .findFragmentById(R.id.fragmentContainerView);
NavController navController = NavHostFragment.findNavController(fragment);
```

##### 返回键失效解决方案

- 旧版

```java
import androidx.appcompat.app.AppCompatActivity;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.NavigationUI;
import android.os.Bundle;
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        NavController controller = Navigation.findNavController(R.id.fragment);
        NavigationUI.setupActionBarWithNavController(this, controller);
    }
    @Override
    public boolean onNavigateUp() {
        NavController controller = Navigation.findNavController(this, R.id.fragment);
        return controller.navigateUp();
    }
}
```

- 解决方案

```java
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.fragment.NavHostFragment;
import androidx.navigation.ui.NavigationUI;
import android.os.Bundle;
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Fragment fragment = getSupportFragmentManager().findFragmentById(R.id.fragment);
        NavController controller = NavHostFragment.findNavController(fragment);
        NavigationUI.setupActionBarWithNavController(this, controller);
    }
    @Override
    public boolean onSupportNavigateUp() {
        NavController controller = Navigation.findNavController(this, R.id.fragment);
        return controller.navigateUp();
    }
    @Override
    public void onBackPressed() {
        onSpportNavigateUp();
    }
}
```

##### 如何在 `Fragment` 中使用 `ConstrainLayout` 布局

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
             xmlns:tools="http://schemas.android.com/tools"
             android:layout_width="match_parent"
             android:layout_height="match_parent"
             tools:context=".BlankFragment">
</FrameLayout>

<!-- 将FrameLayout修改成androidx.constraintlayout.widget.ConstraintLayout -->

<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
             xmlns:android="http://schemas.android.com/apk/res/android"
             xmlns:tools="http://schemas.android.com/tools"
             android:layout_width="match_parent"
             android:layout_height="match_parent"
             tools:context=".BlankFragment">
</androidx.constraintlayout.widget.ConstraintLayout>
```

### 七、`LifeCycle` 生命周期的利用

##### 代码格式

```java
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        onCreate(savedInstanceState);
        getLifecycle().addObserver(生命周期观察类实例);	// 一定要设置观察，不然会没有效果，没有事件或触发指定的方法
    }
}

// 可以在重写View组件或继承Activity和Fragment时实现
class 生命周期观察类 implements LifecycleObserver {	// 实现生命周期观察
    @OnLifecycleEvent(Lifecycle.Event.ON_事件)	// 设置事件类型
    // 方法定义，在指定事件触发时执行的方法
}
```

##### 事件列表

| 常量名                       | 说明     |
| ---------------------------- | -------- |
| `Lifecycle.Event.ON_CREATE`  | 创建     |
| `Lifecycle.Event.ON_START`   | 开启     |
| `Lifecycle.Event.ON_RESUME`  | 恢复     |
| `Lifecycle.Event.ON_PAUSE`   | 暂停     |
| `Lifecycle.Event.ON_STOP`    | 停止     |
| `Lifecycle.Event.ON_DESTORY` | 摧毁     |
| `Lifecycle.Event.ON_ANY`     | 所有事件 |

### 八、`Room` 管理 `SQLite` 数据库

> `Room` 管理 `SQLite` 数据库往往都需要三步
>
> ```
> Entity - 实体，一个实体类，拥有构造器、Getter和Setter，往往都是用于定义数据表中字段的属性的
> DAO(Database Access Object) - 数据访问对象，一个接口，拥有各种支持的数据库基本查询方式，往往用于详细定义数据库基本操作的
> Database - 数据库操作，一个抽象类，提供数据访问对象的操作
> ```

##### Entity

```java
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;
@Entity
public class MyEntity {
    @PrimaryKey(autoGenerate = true)    // 这个是自动递增加主键
    private int id;                     // 往往都是用于定义id的
    @ColumnInfo(name = "字段名")         // 这个可以省略，默认情况下，会使用该变量名作为字段名
    private Type columnObj;             // 这里存放数据
    
    // 剩下的就是一些Getter和Setter等之类的方法定义了
}
```

##### Dao

```java
import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Update;
@Dao
public interface MyDao {
    @Insert
    返回值 方法(实体形参列表);
    @Update
    返回值 方法(实体形参列表);
    @Delete
    返回值 方法(实体形参列表);
    @Query("SQL语句")
    实体类 方法();
}
```

##### Database

```java
import androidx.room.Database;
import androidx.room.RoomDatabase;
@Database(entities = {实体类.class}, version = 1, exportSchema = false)
public abstract class MyRoomDatabase extends RoomDatabase {
    public abstract 数据库访问对象类 方法名();
}
// 在数据库对象方面，应该用singleton的形式去调用，尽量去避免实例化，在获取方法中推荐加synchronized关键字去防止多线程访问时冲突
```

##### Activity

```java
// 函数原型
Room.databaseBuilder(@NonNull Context context, @NonNull Class<? extends RoomDatabase> klass, @NonNull String name)

// 常见用法
数据库类名 数据库对象 = Room.databaseBuilder(this, 数据库类名.class, "数据库文件名")
    .allowMainThreadQueries()
    .build();
```



## 第三方插件

### `OkHTTP` 库

#### 问题解决

##### 没有权限建立套接字连接

- 问题效果

```
socket failed: EPERM (Operation not permitted)
```

- 解决方案

在 `manifests/AndroidManifest.xml` 文件中，添加以下内容

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="com.example.mydemoapp">
    <uses-permission android:name="android.permission.INTERNET" />
    <!-- 上面这行 -->
</manifest>
```

##### 访问时出问题

- 问题效果

```
CLEARTEXT communication to 主机名 not permitted by network security policy
```

- 解决方案

在 `res/` 中创建 `xml/` 文件夹，并在里面添加文件 `network_security_config.xml` ，内容为以下文本

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true" />
</network-security-config>
```

然后在 `manifests/AndroidManifest.xml` 文件中，添加以下内容

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="com.example.mydemoapp">
    <application
		...
        android:networkSecurityConfig="@xml/network_security_config"> <!-- 这行 -->
    </application>
</manifest>
```

