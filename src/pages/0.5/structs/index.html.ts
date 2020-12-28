// metadata
export const version = "0.5.16"
export const title = "Structs"
export const description = "An example of how to use structs in Solidity"

const html = `<p>You can define your own type by creating a <code>struct</code>.</p>
<p>They are useful for grouping togther related data.</p>
<pre><code class="language-solidity"><span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.5.16;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Todos</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Todo</span> {
        <span class="hljs-keyword">string</span> text;
        <span class="hljs-keyword">bool</span> completed;
    }

    <span class="hljs-comment">// An array of &#x27;Todo&#x27; structs</span>
    Todo[] <span class="hljs-keyword">public</span> todos;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">create</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _text</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// 3 ways to initialize a struct</span>
        <span class="hljs-comment">// - calling it like a function</span>
        todos.<span class="hljs-built_in">push</span>(Todo(_text, <span class="hljs-literal">false</span>));

        <span class="hljs-comment">// key value mapping</span>
        todos.<span class="hljs-built_in">push</span>(Todo({
            text: _text,
            completed: <span class="hljs-literal">false</span>
        }));

        <span class="hljs-comment">// initialize an emoty struct and then update it</span>
        Todo <span class="hljs-keyword">memory</span> todo;
        todo.text = _text;
        <span class="hljs-comment">// todo.completed initialized to false</span>

        todos.<span class="hljs-built_in">push</span>(todo);
    }

    <span class="hljs-comment">// Solidity automatically created a getter for&#x27; todos&#x27; so</span>
    <span class="hljs-comment">// you don&#x27;t actually need this function.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _index</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> text, <span class="hljs-keyword">bool</span> completed</span>)
    </span>{
        Todo <span class="hljs-keyword">storage</span> todo = todos[_index];
        <span class="hljs-keyword">return</span> (todo.text, todo.completed);
    }

    <span class="hljs-comment">// update text</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">update</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _index, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _text</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        Todo <span class="hljs-keyword">storage</span> todo = todos[_index];
        todo.text = _text;
    }
    <span class="hljs-comment">// update completed</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">toggleCompleted</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _index</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        Todo <span class="hljs-keyword">storage</span> todo = todos[_index];
        todo.completed = !todo.completed;
    }
}
</code></pre>
`

export default html
