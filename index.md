## 收集

### 生词集收集

| 单词        | 释义       |
| ------------- | --------- |
| resume | 恢复，重新开始 |
| horizontal    | 水平       |
| vertical      | 垂直       |
| constraint    | 约束，限制  |
| wrap          | 包裹       |
| barrier       | 障碍，屏障  |
| discrete      | 分离，离散的 |
| indeterminate | 不确定的    |
| orientation | 方向，取向，方针 |
| rotate | 旋转，回转，轮流，环绕，打转 |
| landscape | 景观，风景，山水，景色，江山 |
| variation | 变化，变体，变异，变动，变奏，异样 |
| bundle | 捆，包裹 |
| observe | 观察，视察，监视，注意到 |
| fetch | 拿来，获取 |
| internal | 内部 |
| external | 外部 |
| navigate | 导航 |



### 专业术语收集

| 简称 | 全称                        | 中文                      |
| ---- | -------------------------- | -------------------------- |
| `dp` | `Density-independent Pixels` | 密度无关像素 |
| `sp` | `Scale-independent Pixels` | 缩放独立像素 |
| `MVC` | `Model-View-Controller`    | 模型-视图-控制器 |
| `MVVM` | `Model-View-ViewModel` | 模型-视图-视图模型 |



### 组件和其常用方法收集

#### `TextView` 文本视图组件

| 方法                                            | 说明                                              |
| ----------------------------------------------- | ------------------------------------------------- |
| `CharSequence getText()`                        | 获取文本内容                                      |
| `void setText(int resid)`                       | 设置文本内容为资源ID - `R.id.*`所指定的字符串常量 |
| `void setText(CharSequence text)`               | 设置文本内容为字符序列                            |
| `void setText(char[] text, int start, int len)` | 设置文本内容为字符数组中指定部分                  |

#### `Switch` 开关组件

| 方法                                            | 说明               |
| ----------------------------------------------- | ------------------ |
| `boolean isChecked()`                           | 判断该开关是否选中 |
| `void setChecked(boolean checked)`              | 设置该开关的状态   |
| `CharSequence getTextOff()`                     | 获取关闭的提示文本 |
| `CharSequence setTextOff(CharSequence textOff)` | 设置关闭的提示文本 |
| `CharSequence getTextOn()`                      | 获取开启的提示文本 |
| `CharSequence setTextOn(CharSequence textOn)`   | 设置开启的提示文本 |

#### `SeekBar` 进度条组件

| 方法                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| `int getProgress()`                               | 获取进度               |
| `void setProgress(int progress)`                  | 设置进度               |
| `void setProgress(int progress, boolean animate)` | 设置进度，是否设置动画 |
| `boolean isIndeterminate()`                       | 是否自动滚动           |
| `void setIndeterminate(boolean indeterminate)`    | 设置是否自动滚动       |

#### `ImageView` 图片视图组件

| 方法                                            | 说明                              |
| ----------------------------------------------- | --------------------------------- |
| `void setImageResource(@DrawableRes int resId)` | 设置图片的资源ID - `R.drawable.*` |

#### `RatingBar` 评分组件

| 方法                           | 说明     |
| ------------------------------ | -------- |
| `float getRating()`            | 获取评分 |
| `void setRating(float rating)` | 设置评分 |

#### `Toast` 下栏小弹框

| 方法                                                         | 说明             |
| ------------------------------------------------------------ | ---------------- |
| `Toast.makeText(Context context, CharSequence text, int duration)` | 字符序列         |
| `Toast.makeText(Context context, @StringRes int resId, int duration)` | 字符串常量资源ID |

常见用法

```java
Toast.makeText(getApplicationContext(), "内容", Toast.LENGTH_SHORT).show();
Toast.makeText(MyActivity.this, "内容", Toast.LENGTH_SHORT).show();
Toast.makeText(this, "内容", Toast.LENGTH_SHORT).show();
```

#### `AlertDialog` 弹窗

> 该类构造器无法访问，无法直接实例化对象，需要通过 `AlertDialog.Builder` 类去 `create` 创建。

| 方法          | 说明     |
| ------------- | -------- |
| `void show()` | 展示窗口 |

#### `AlertDialog.Builder` 弹窗构建

| 构造器                                 | 说明 |
| -------------------------------------- | ---- |
| `AlertDialog.Builder(Context context)` |      |

| 方法                                                         | 说明                                 |
| ------------------------------------------------------------ | ------------------------------------ |
| `Builder setTitle(int titleId)`                              | 设置标题                             |
| `Builder setTitle(CharSequence title)`                       |                                      |
| `Builder setNegativeButton(CharSequence text, OnClickListener listener)` | 设置否定按钮                         |
| `Builder setNegativeButton(int textId, OnClickListener listener)` |                                      |
| `Builder setPositiveButton(CharSequence text, OnClickListener listener)` | 设置肯定按钮                         |
| `Builder setPositiveButton(int textId, OnClickListener listener)` |                                      |
| `Builder setCancelable(boolean cancelable)`                  | 是否可退出                           |
| `Builder setIcon(Drawable icon)`                             | 设置图标                             |
| `Builder setIcon(int iconId)`                                |                                      |
| `Builder setItems(CharSequence[] items, OnClickListener listener)` | 设置选项                             |
| `Builder setItems(int itemsId, OnClickListener listener)`    |                                      |
| `Builder setSingleChoiceItems(CharSequence[] items, int checkedItem, OnClickListener listener)` | 设置单选，`checkedItem`为默认勾选项  |
| `Builder setSingleChoiceItems(int itemsId, int checkedItem, OnClickListener listener)` |                                      |
| `Builder setMultiChoiceItems(CharSequence[] items, boolean[] checkedItems, OnMultiChoiceClickListener listener)` | 设置多选，`checkedItems`为默认勾选项 |
| `Builder setMultiChoiceItems(int itemsId, boolean[] checkedItems, OnMultiChoiceClickListener listener)` |                                      |
| `Builder setMessage(CharSequence message)`                   | 设置显示的消息内容                   |
| `Builder setMessage(int messageId)`                          |                                      |
| `Builder setNeutralButton(CharSequence text, OnClickListener listener)` | 设置中立按钮                         |
| `Builder setNeutralButton(int textId, OnClickListener listener)` |                                      |
| `Builder setView(View view)`                                 | 设置主题的View实例                   |
| `Builder setView(int layoutResId)`                           |                                      |
| `Builder setOnCancelListener(OnCancelListener onCancelListener)` | 设置取消事件的监听者                 |
| `AlertDialog create()`                                       | 创建 `AlertDialog` 对象              |

#### `Chronometer` 计时器组件

| 方法                            | 说明                 |
| ------------------------------- | -------------------- |
| `void start()`                  | 开始实时更新         |
| `void stop()`                   | 关闭实时更新         |
| `void setBase(long base)`       | 设置基础值           |
| `long getBase()`                | 获取基础值           |
| `void setFormat(String format)` | 设置格式化输出字符串 |
| `String getFormat()`            | 获取格式化输出字符串 |



### 数据储存类及其常用方法收集

#### `Bundle` 类

> 用于存储各种数据类型的类
>
> 路径：`android.os.Bundle`

| 方法                                                         | 说明 |
| ------------------------------------------------------------ | ---- |
| `Object get(String key)`                                     |      |
| `Bundle getBundle(String key)`                               |      |
| `byte getByte(String key)`                                   |      |
| `byte getByte(String key, byte defaultValue)`                |      |
| `byte[] getByteArray(String key)`                            |      |
| `char getChar(String key)`                                   |      |
| `char getChar(String key, char defaultValue)`                |      |
| `char[] getCharArray(String key)`                            |      |
| `CharSequence getCharSequence(String key)`                   |      |
| `CharSequence getCharSequence(String key, CharSequence defaultValue)` |      |
| `CharSequence[] getCharSequenceArray(String key)`            |      |
| `ArrayList<CharSequence> getCharSequenceArrayList(String key)` |      |
| `Class getClass(String key)`                                 |      |
| `float getFloat(String key)`                                 |      |
| `float getFloat(String key, float defaultValue)`             |      |
| `float[] getFloatArray(String key)`                          |      |
| `int getInt(String key)`                                     |      |
| `int getInt(String key, int defaultValue)`                   |      |
| `int[] getIntArray(String key)`                              |      |
| `ArrayList<Integer> getIntegerArrayList(String key)`         |      |
| `short getShort(String key)`                                 |      |
| `short getShort(String key, short defaultValue)`             |      |
| `short[] getShortArray(String key)`                          |      |
| `String getString(String key)`                               |      |
| `String getString(String key, String defaultValue)`          |      |
| `String[] getStringArray(String key)`                        |      |
| `ArrayList<String> getStringArrayList(String key)`           |      |
| `boolean getBoolean(String key)`                             |      |
| `boolean getBoolean(String key, boolean defaultValue)`       |      |
| `booleanp[] getBooleanArray(String key)`                     |      |
| `double getDouble(String key)`                               |      |
| `double getDouble(String key, double defaultValue)`          |      |
| `double[] getDoubleArray(String key)`                        |      |
| `long getLong(String key)`                                   |      |
| `long getLong(String key, long defaultValue)`                |      |
| `long[] getLongArray(String key)`                            |      |
| `void putAll(Bundle bundle)`                                 |      |
| `void putBundle(String key, Bundle value)`                   |      |
| `void putByte(String key, byte value)`                       |      |
| `void putByteArray(String key, byte[] value)`                |      |
| `void putChar(String key, char value)`                       |      |
| `void putCharArray(String key, char[] value)`                |      |
| `void putCharSequence(String key, CharSequence value)`       |      |
| `void putCharSequenceArray(String key, CharSequence[] value)` |      |
| `void putCharSequenceArrayList(String key, ArrayList<CharSequence> value)` |      |
| `void putFloat(String key, float value)`                     |      |
| `void putFloatArray(String key, float[] value)`              |      |
| `void putInt(String key, int value)`                         |      |
| `void putIntArray(String key, int[] value)`                  |      |
| `void putIntegerArrayList(String key, ArrayList<Integer> value)` |      |
| `void putShort(String key, short value)`                     |      |
| `void putStortArray(String key, short[] value)`              |      |
| `void putString(String key, String value)`                   |      |
| `void putStringArray(String key, String[] value)`            |      |
| `void putStringArrayList(String key, ArrayList<String> value)` |      |
| `void putBoolean(String key, boolean value)`                 |      |
| `void putBooleanArray(String key, boolean[] value)`          |      |
| `void putDouble(String key, double value)`                   |      |
| `void putDoubleArray(String key, double[] value)`            |      |
| `void putLong(String key, long value)`                       |      |
| `void putLongArray(String key, long[] value)`                |      |

#### `MutableLiveData` 类

> 一个可监视数据对象，可变实时数据。

| 方法                                                         | 说明                                     |
| ------------------------------------------------------------ | ---------------------------------------- |
| `T getValue()`                                               | 获取值                                   |
| `void setValue(T value)`                                     | 设置值                                   |
| `void postValue(T value)`                                    | 多线程设置值                             |
| `void observe(@NonNull LifecycleOwner owner, @NonNull Observer<? super T> observer)` | 数据监视，重写Observer接口实现自定义操作 |



#### `SavedStateHandle` 类

> `JetPack`中内置的数据存储类，用于保存Activity活动摧毁前的数据，与`Bundle`最大的区别是它会自动返回`LiveData`类型的变量，可供后期`observe`监视操作。
>
> 使用前需要
>
> `Add dependency on androidx.lifecycle:androidx-viewmodel-savedstate and import`
>
> ```
> dependencies {
> 	impementation 'androidx.lifecycle:lifecycle-viewmodel-savedstate:2.3.1'
> }
> ```

| 方法                                                         | 说明                                     |
| ------------------------------------------------------------ | ---------------------------------------- |
| `<T> T get(String key)`                                      | 获得指定键名的对象                       |
| `MutableLiveData<T> getLiveData(String key)`                 | 获得指定键名的实时数据对象               |
| `MutableLiveData<T> getLiveData(String key, T initialValue)` | 获得指定键名的实时数据对象，并设置初始值 |
| `boolean contains(String key)`                               | 判断当前储存类中是否存在该键名           |
| `void set(String key, T value)`                              | 设置该键名与其值                         |

#### `SharedPreferences` 接口

> 作用是数据持久化，永久保存数据用到的方法。
>
> 该类会在程序目录下创建xml文件用于存放指定值。

- 获取实例

> `getSharedPreferences` 方法在外界使用时，务必使用该Activity的`getApplicationContext()`方法传入Context对象，尽管Activity具有Context的一切属性，但这种引用会间接产生内存泄漏，Activity经常会经历摧毁和创建，但在引用中则会一直占用一部分内存，使用`ApplicationContext`则会对当前应用程序进行唯一的引用，只要应用程序存在，该对象就会一直存在，有且只有一个，Singleton。

| 方法                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ContextWrapperObj.getSharedPreferences(String name, int mode)` | 该方法可自定义文件名储存数据，外部需要调用该Activity的Context实例才可获得此对象 |
| `ActivityObj.getPreferences(int mode)`                       | 该方法默认使用类名命名存储数据                               |

- 模式常量

| 常量                            | 说明   |
| ------------------------------- | ------ |
| `Context.MODE_PRIVATE = 0x0000` | 私有的 |

- 常用方法

| 方法                                                         | 说明                           |
| ------------------------------------------------------------ | ------------------------------ |
| `SharedPreferences.Editor edit()`                            | 反馈一个作家对象，用于写入数据 |
| `Map<String, ?> getAll()`                                    | 读取全部数据                   |
| `int getInt(String key, int defValue)`                       | 读取指定整型，附加缺省值       |
| `boolean getboolean(String key, boolean defValue)`           | 读取指定布尔型，附加缺省值     |
| `float getFloat(String key, float defValue)`                 | 读取指定浮点型，附加缺省值     |
| `long getLong(String key, long defValue)`                    | 读取指定长整型，附加缺省值     |
| `String getString(String key, String defValue)`              | 读取指定字符串型，附加缺省值   |
| `Set<String> getStringSet(String key, Set<String> defValue)` | 读取指定字符串集合，附加缺省值 |

#### `SharedPreferences.Editor` 接口

> 该类是由`SharedPreferences`对象的`edit()`方法获得的，用于写入数据

- 常用方法

| 方法                                                  | 说明             |
| ----------------------------------------------------- | ---------------- |
| `Editor putInt(String key, int value)`                | 写入整型         |
| `Editor putBoolean(String key, boolean value)`        | 写入布尔型       |
| `Editor putFloat(String key, float value)`            | 写入单精度浮点型 |
| `Editor putLong(String key, long value)`              | 写入长整型       |
| `Editor putString(String key, String value)`          | 写入字符串       |
| `Editor putStringSet(String key, Set<String> values)` | 写入字符串集合   |
| `void apply()`                                        | 提交，非同步提交 |
| `boolean commit()`                                    | 提交             |
| `Editor clear()`                                      | 清除内容         |
| `Editor remove(String key)`                           | 移除指定键名     |

### 重要组件类及其常用方法收集

#### `Activity` 类

> `Activity` 类共有的方法

| 方法                                        | 说明                                      |
| ------------------------------------------- | ----------------------------------------- |
| `Application getApplication()`              | 获得应用程序对象                          |
| `Context getApplicationContext()`           | 获得应用程序的Context对象，方法引用时需要 |
| `CharSequence getText(@StringId int resId)` | 获取文本                                  |
| `Resources getResources()`                  | 获取资源对象                              |
| `String getString(@StringId int resId)`     | 获取字符串                                |

#### `AndroidViewModel` 类

> 该类直接继承自 `ViewModel` 类，并添加了对应用程序对象的引用。

| 构造器                                               | 说明                 |
| ---------------------------------------------------- | -------------------- |
| `AndroidViewModel(@NonNull Application application)` | 赋值给`mApplication` |

| 方法                                         | 说明                          |
| -------------------------------------------- | ----------------------------- |
| `<T extends Application> T getApplication()` | 获取`Application`应用程序对象 |

#### `Fragment` 类

> 用于继承的`Fragment`类

| 方法                                       | 说明                                         |
| ------------------------------------------ | -------------------------------------------- |
| `Bundle getArguments()`                    | 获取传递的参数                               |
| `Bundle requireArguments()`                | 获取传递的参数，检测是否为空，为空则抛出异常 |
| `void setArguments(@Nullable Bundle args)` | 设置当前的参数                               |
| `FragmentActivity getActivity()`           | 获取当前分页的活动对象                       |
| `Context getContext()`                     | 获取当前分页的Context对象                    |

#### `NavController` 类

| 获得对象的方式                                               |
| ------------------------------------------------------------ |
| `Navigation.findNavController(@NonNull @Nullable View view)` |
| `Navigation.findNavController(@NonNull Activity activity, @IdRes int viewId)` |
| `NavHostFragment.findNavController(@NonNull Fragment fragment)` |
| `((NavHostFragment) getSupportFragmentManager().findFragmentById(@IdRes int id)).getNavController()` |
| `NavHostFragment.findNavController(getSupportFragmentManager().findFragmentById(@IdRes int id))` |


| 方法                                                     | 说明                   |
| -------------------------------------------------------- | ---------------------- |
| `void navigate(@IdRes int resId)`                        | 跳转页面               |
| `void navigate(@IdRes int resId, @Nullable Bundle args)` | 跳转页面的同时传递参数 |



### 数据库方面重要的类及其方法的收集

#### `AsyncTask` 异步处理子线程

> 注意：该类是抽象类，需要重写的
>
> ```java
> static class MyAsyncTask extends AsyncTask<Params, Progress, Result>
> ```
>
> 第一个泛型是参数的类型
>
> 第二个泛型是报告的进度
>
> 第三个泛型是报告的结果

| 方法                                                         | 是否重写 | 说明                                         |
| ------------------------------------------------------------ | :------: | -------------------------------------------- |
| `Result doInBackground(Params... params)`                    |    是    | 后台执行操作                                 |
| `void onPostExecute(Result result)`                          |    是    | 任务完成时呼叫的方法，用于将结果待会给主线程 |
| `void onProgressUpdate(Progress... values)`                  |    是    | 进度更新时呼叫的方法                         |
| `void onPreExecute()`                                        |    是    | 在后台任务执行之前呼叫的方法                 |
| `void publishProgress(Progress, values)`                     |    是    | 公开进度，会呼叫`onProgressUpdate`方法       |
| `AsyncTask<Params, Progress, Result> execute(Params... params)` |    否    | 执行该子线程的操作                           |

#### `Adapter` 适配器

| 方法                                                         | 说明         |
| ------------------------------------------------------------ | ------------ |
| `VH onCreateViewHolder(@NonNull ViewGroup parent, int viewType)` | 创建视图     |
| `void onBindViewHolder(@NonNull VH holder, int position)`    | 视图数据绑定 |
| `int getItemCount()`                                         | 获取内容大小 |
| `void notifyDataSetChanged()`                                | 提示数据更新 |
|                                                              |              |







### 事件收集

#### 点击事件 - `onClick`

```java
// 视图组件共有的点击事件
viewInstance.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        // 代码体
    }
});
// 日志中的点击事件
new DialogInterface.OnClickListener() {
    @Override
    public void onClick(DialogInterface dialog, int which) {
        // 代码体
    }
}
```

#### 选中事件 - `onCheckedChange`

```java
// 单选
compoundButtonInstance.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
	@Override
	public void onCheckedChange(CompoundButton buttonView, boolean isChecked) {
		// 代码体
	}
});
// 多选
radioGroupInstance.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
    @Override
    public void onCheckedChanged(RadioGroup group, int checkedId) {
		// 代码体，checkId是RadioBox的id编号
    }
});
```

#### 进度条拖动事件 - `onSeekBarChange`

```java
seekBarInstance.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
    @Override
    public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
        // 进度条改变时执行的代码段
    }
    @Override
    public void onStartTrackingTouch(SeekBar seekBar) {
        // 开始移动进度条时执行的代码段
    }
    @Override
    public void onStopTrackingTouch(SeekBar seekBar) {
        // 结束移动进度条时执行的代码段
    }
});
```

#### 评分修改事件 - `onRatingChange`

```java
ratingInstance.setOnRatingChangeListener(new RatingBar.OnRatingChangeListener() {
    @Override
    public void onRatingChanged() {
        // 代码段
    }
});
```

#### 多选点击事件 - `onMultiChoiceClick`

```java
new DialogInterface.OnMultiChoiceClickListener() {
    @Override
    public void onClick(DialogInterface dialog, int which, boolean isChecked) {
        // 代码段
    }
}
```





### `MainActivity` 类复写方法收集

| 重写方法                                                     | 说明                                       |
| ------------------------------------------------------------ | ------------------------------------------ |
| `protected void onCreate(Bundle savedInstanceState)`         | 该活动首次创建时调用的方法                 |
| `protected void onStart()`                                   | 该活动首次由不可见变可见时调用的方法       |
| `protected void onResume()`                                  | 该活动已经准备好与用户进行交互时调用的方法 |
| `protected void onPause()`                                   | 该活动被暂停时调用的方法                   |
| `protected void onStop()`                                    | 该活动完全不可见时调用的方法               |
| `protected void onRestart()`                                 | 该活动由停止状态变为运行状态时调用的方法   |
| `protected void onDestroy()`                                 | 该活动被摧毁之前调用的方法                 |
| `protected void onSaveInstanceState(@NonNull Bundle outBundle)` | 保存当前活动实例状态的方法                 |
| `public boolean onNavigateUp()`                              | 导航向上跳转的代码                         |
| `public boolean onSupportNavigateUp()`                       | 兼容性导航向上跳转的代码                   |
| `public void onBackPressed()`                                | 点击回退按钮时调用的方法                   |
| ``                                                           |                                            |

#### `MainActivity` 继承和实现族谱

```java
public class MainActivity extends androidx.appcompat.app.AppCompatActivity

public class AppCompatActivity extends androidx.fragment.app.FragmentActivity implements 
		AppCompatCallback, 
		androidx.core.app.TaskStackBuilder.SupportParentable, 
		ActionBarDrawerToggle.DelegateProvider

public class FragmentActivity extends androidx.activity.ComponentActivity implements 
		androidx.core.ActivityCompat.OnRequestPermissionsResultCallback, 
		androidx.core.ActivityCompat.RequestPermissionsRequestCodeValidator

public class ComponentActivity extends androidx.core.app.ComponentActivity implements 
		androidx.lifecycle.LifecycleOwner, 
		androidx.lifecycle.ViewModelStoreOwner, 
		androidx.lifecycle.SavedStateRegistryOwner, 
		OnBackPressedDispatcherOwner

public class ComponentActivity extends android.app.Activity implements 
		androidx.lifecycle.LifecycleOwner, 
		androidx.core.view.KeyEventDispatcher.Component

public class Activity extends android.view.ContextThemeWrapper implements 
		android.view.LayoutInflater.Factory2, 
		android.view.Window.Callback, 
		android.view.KeyEvent.Callback, 
		android.view.View.OnCreateContextMenuListener, 
		android.content.ComponentCallbacks2, 
		android.view.Window.OnWindowDismissedCallback, 
		android.view.autofill.AutofillManager.AutofillClient, 
		android.view.contentcapture.ContentCaptureManager.ContentCaptureClient

public class ContextThemeWrapper extends android.content.ContextWrapper
public class ContextWrapper extends Context
public abstract class Context
```



### 页面转换动画

##### rotate - 旋转

| 属性                  | 值       | 说明      |
| --------------------- | -------- | --------- |
| `android:fromDegrees` | 整型角度 | 初始角度  |
| `android:toDegrees`   | 整型角度 | 目的角度  |
| `android:pivotX`      | 百分比%  | 轴心x坐标 |
| `android:pivotY`      | 百分比%  | 轴心y坐标 |

##### scale - 缩放

| 属性                 | 值      | 说明      |
| -------------------- | ------- | --------- |
| `android:fromXDelta` | 浮点值  | 初始x坐标 |
| `android:toXDelta`   | 浮点值  | 目标x坐标 |
| `android:fromYDelta` | 浮点值  | 初始y坐标 |
| `android:toYDelta`   | 浮点值  | 目标y坐标 |
| `android:pivotX`     | 百分比% | 轴心x坐标 |
| `android:pivotY`     | 百分比% | 轴心y坐标 |

##### translate - 平移

| 属性                 | 值      | 说明      |
| -------------------- | ------- | --------- |
| `android:fromXDelta` | 百分比% | 初始x坐标 |
| `android:toXDelta`   | 百分比% | 目标x坐标 |
| `android:fromYDelta` | 百分比% | 初始y坐标 |
| `android:toYDelta`   | 百分比% | 目标y坐标 |

##### alpha - 透明度

| 属性                | 值     | 说明         |
| ------------------- | ------ | ------------ |
| `android:fromAlpha` | 浮点值 | 初始阿尔法值 |
| `android:toAlpha`   | 浮点值 | 目的阿尔法值 |

##### set - 集合

| 属性                        | 值              | 说明                               |
| --------------------------- | --------------- | ---------------------------------- |
| `android:duration`          | 整型毫秒        | 动画持续时间                       |
| `android:fillAfter`         | true/false      | 动画结束后是否保留动画开始前的效果 |
| `android:fillBefore`        | true/false      | 动画结束后是否保留动画结束后的效果 |
| `android:repeatMode`        | restart/reverse | 重复模式                           |
| `android:shareInterpolator` | true/false      | 是否共享动画效果                   |
| `android:startOffset`       | 整型毫秒        | 动画开始时间                       |





## 安卓小记

### 一、Android App 的四大组件

| Components         | 组件       |
| ------------------ | ---------- |
| Activity           | 活动       |
| Broadcast Receiver | 广播接收器 |
| Service            | 服务       |
| Content Provider   | 内容提供者 |



### 二、Activity的生命周期 (Activity Lifecycle)

```
                                 Activity Lifecycle

                                     +--------+
                                    / Activity \
                                    \ launched /
                                     +---+----+
                                         |
                                         v
                                   +------------+
              +------------------> | onCreate() |
              |                    +-----+------+
              |                          |
              |                          v
              |                    +------------+                       +-------------+
              |                    | onStart()  | <---------------------+ onRestart() |
              |                    +-----+------+                       +-------------+
              |                          |                                     ^
              |                          v                                     |
     +--------+--------+           +------------+                              |
     | User navigates  |           | onResume() | <-------------+              |
     | to the activity |           +-----+------+               |              |
     +--------+--------+                 |                      |              |
              |                          v                      |              |
        +-----+-----+               +---------+                 |              |
       / App process \             / Activity  \                |              |
       \    killed   /             \  running  /                |              |
        +-----------+               +----+----+                 |              |
              ^                          |                      |              |
              |              +-----------+------------+         |              |
              |              | Another activity comes |         |              |
              |              | into the foreground    |+--------+--------+     |
              |              +-----------+------------+|  User returns   |     |
              |                          |             | to the activity |     |
+-------------+-------------+            v             +--------+--------+     |
| Apps with higher priority |      +------------+               |              |
|        need memory        +------+ onPause()  +---------------+              |
+-------------+-------------+      +-----+------+                              |
              |                          |                                     |
              |                 +--------+----------+                          |
              |                 |  The activity is  |                          |
              |                 | no longer visible |                 +--------+--------+
              |                 +--------+----------+                 | User navigation |
              |                          |                            | to the activity |
              |                          v                            +--------+--------+
              |                    +------------+                              |
              +--------------------+  onStop()  +------------------------------+
                                   +-----+------+
                                         |
                          +--------------+----------------+
                          | The activity is finishing or  |
                          | being destroyed by the system |
                          +--------------+----------------+
                                         |
                                         v
                                   +------------+
                                   | onDestroy()|
                                   +------------+
                                         |
                                         v
                                     +--------+
                                    / Activity \
                                    \ shutdown /
                                     +--------+
```

**说明**

| Lifecycle                  | 生命周期 | 说明                                       |
| -------------------------- | -------- | ------------------------------------------ |
| `protected void onCreate`  | 创建     | 该活动首次创建时调用的方法                 |
| `protected void onStart`   | 开启     | 该活动首次由不可见变可见时调用的方法       |
| `protected void onResume`  | 恢复     | 该活动已经准备好与用户进行交互时调用的方法 |
| `protected void onPause`   | 暂停     | 该活动被暂停时调用的方法                   |
| `protected void onStop`    | 停止     | 该活动完全不可见时调用的方法               |
| `protected void onRestart` | 重新启动 | 该活动由停止状态变为运行状态时调用的方法   |
| `protected void onDestroy` | 摧毁     | 该活动被摧毁之前调用的方法                 |



### 三、窗口状态

修改配置文件`app/manifests/AndroidManifest.xml`，锁定窗口旋转

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
          package="com.example.orientation">
    <application
                 android:allowBackup="true"
                 android:icon="@mipmap/ic_launcher"
                 android:label="Orientation"
                 android:roundIcon="@mimap/ic_launcher_round"
                 android:supportsRtl="true"
                 android:theme="@style/AppTheme">
        <activity android:name=".MainActivity"
                  android:screenOrigentation="portrait"> <!-- 锁定窗口旋转 -->
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
</manifest>
```

由于窗口状态的改变会摧毁当前的活动Activity，数据会丢失，需要用到bundle去储存数据

```java
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        if (savedInstanceState != null)
	        savedInstanceState.getDataType(key);	// 从bundle中获取数据，DataType替换为所保存的数据类型
    }
    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstaceState(outState);
        outState.putDataType(key, value);		// 向bundle中保存数据，DataType替换为所保存的数据类型
    }
}
```

经实验发现，`onSaveInstanceState`方法的父类实现会自动备份原`Activity`中各项的数据。



### 四、`JetPack` 的使用

##### `ViewModelProviders.of` 过时解决方案

旧版获取`ViewModel`对象的方法

```java
/** build.gradle (Module:app) *
  *****************************
  * dependencies {
  * 	implementation 'androidx.lifecycle:lifecycle-extensions:2.0.0'
  * }
  * 
  */
import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProviders;
import android.os.Bundle;
public class MainActivity extends AppCompatActivity {
    MyViewModel myViewModel;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
		myViewModel = ViewModelProviders.of(this).get(MyViewModel.class);
		myViewModel = ViewModelProviders.of(this, new SavedStateVMFactory(this)).get(MyViewModel.class);	// 用SavedStateHandle 保存临时数据的方法
    }
}
```

新版获取`ViewModel`对象的方法

```java
import android.os.Bundle;
import androidx.lifecycle.ViewModelProvider;
public class MainActivity extends AppCompatActivity {
    MyViewModel myViewModel;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        myViewModel = new ViewModelProvider(this, new ViewModelProvider.NewInstanceFactory()).get(MyViewModel.class);
        myViewModel = new ViewModelProvider(this, new SavedStateViewModelFactory(getApplication(), this).get(MyViewModel.class);	// 用SavedStateHandle 保存临时数据的方法
    }
}
```

对比

```java
// 默认实例方法
ViewModelProviders.of(this).get(MyViewModel.class);		// 2.0.0 以前的方法
new ViewModelProvider(this).get(MyViewModel.class);
new ViewModelProvider(this, new ViewModelProvider.NewInstanceFactory()).get(MyViewModel.class);	// 现在可用的方法

// SavedStateHandle 储存数据方法
ViewModelProviders.of(this, new SavedStateVMFactory(this)).get(MyViewModel.class);	// 2.0.0 以前的方法
new ViewModelProvider(this, new SavedStateViewModelFactory(getApplication(), this).get(MyViewModel.class);	// 现在可用的方法
```

##### `Live-Data` 数据监听

> 该对象数据修改时，会触发 `onChanged` 事件。

```java
MutableLiveData<T> mutableLiveData = new MutableLiveData<>();
mutableLiveData.observe(this, new Observe<T>() {
    @Override
    public void onChanged(T t) {
        // 代码
    }
})
```





##### `data-binding` 的使用和正向绑定（`Layout -> ViewModel`）

修改文件`build.gradle (Module:app)`

```
android {
	defaultConfit {
		dataBinding {
			enabled true
		}
		// 或者以下方法
		dataBinding.enabled true
	}
}
```

转换 `res/layout/activity_main.xml` 文件

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
                                                   android:layout_width="match_parent"
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

