<div class="page-wrapper">
  <nav>
    <button class="prevPage"><i class="glyphicon glyphicon-arrow-left"></i></button>
  </nav>
  <div id="todoapp">
      <header>
        <h1>Todos</h1>
        <input id="new-todo" type="text" placeholder="What needs to be done?">
      </header>

      <section id="main" style="display: none;">
        <input id="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul id="todo-list"></ul>
      </section>

      <footer style="display: none;">
        <a id="clear-completed">Clear completed</a>
        <div id="todo-count"></div>
      </footer>
    </div>
</div>